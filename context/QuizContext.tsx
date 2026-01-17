"use client"
import { createQuiz } from "@/lib/actions/createQuiz";
import { goalBasedQuestions, mainGoalQuestion } from "@/quiz-data/quiz.data";
import { QuizAnswersType } from "@/types/QuizAnswersType";
import { QuizQuestionType } from "@/types/QuizQuestionType";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react";

type QuizContextType = {
    questionList: QuizQuestionType[];
    currentQuestionData: QuizQuestionType;
    selectedOption: string;
    currentQuestionIndex: number,
    setSelectedOption: (value: string) => void;
    next: () => void;
    prev: () => void;
    lastQuestion: boolean;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [questionList, setQuestionList] = useState([mainGoalQuestion]);
    const [answers, setAnswers] = useState<Partial<QuizAnswersType>>({});
    const router = useRouter();

    const currentQuestionData = questionList[currentQuestionIndex];

    const lastQuestion = questionList?.length - 1 === currentQuestionIndex;


    const handleCreateQuiz = async (answers: QuizAnswersType) => {
        await createQuiz(answers);
    }

    const next = () => {
        if (currentQuestionData.key === "mainGoal") {
            const plan = goalBasedQuestions[selectedOption];
            if (!plan) return;

            setQuestionList([...plan]);
            setAnswers({ mainGoal: selectedOption });

            return;
        }

        if (lastQuestion) {
            const updatedAnswers = { ...answers, [currentQuestionData.key]: selectedOption };
            handleCreateQuiz(updatedAnswers as QuizAnswersType);
            router.push('/plan');
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setAnswers((prev) => {
                return { ...prev, [currentQuestionData.key]: selectedOption }
            });
        }

    }

    const prev = () => {
        setCurrentQuestionIndex(prev => prev - 1);
    }



    return <QuizContext.Provider value={{ setSelectedOption, next, prev, currentQuestionData, selectedOption, currentQuestionIndex, questionList, lastQuestion }}>{children}</QuizContext.Provider>
}


export const useQuiz = () => {
    const contextValue = useContext(QuizContext);

    if (!contextValue) {
        throw new Error("useRunPlan must be used inside of RunProvider");
    }

    return contextValue;
}