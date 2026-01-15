"use client"
import { createQuiz } from "@/lib/actions/createQuiz";
import { quizQuestions } from "@/quiz-data/quiz.data";
import { QuizAnswersType } from "@/types/QuizAnswersType";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type QuizContextType = {
    quiz: typeof quizQuestions[number];
    chooseOption: string;
    currentQuestion: number,
    setChooseOption: (value: string) => void;
    next: () => void;
    prev: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [chooseOption, setChooseOption] = useState("");
    const [saveAsnwers, setSaveAnswers] = useState<QuizAnswersType>({});
    const lastQuestion = quizQuestions.length - 1 === currentQuestion;
    const quiz = quizQuestions[currentQuestion];
    const router = useRouter();

    const handleCreateQuiz = async (answers: QuizAnswersType) => {
        await createQuiz(answers);
    }

    const next = () => {
        const updatedAnswers = { ...saveAsnwers, [quiz.key]: chooseOption };

        if (lastQuestion) {
            handleCreateQuiz(updatedAnswers);
            router.push('/plan');
        } else {
            setCurrentQuestion(prev => prev + 1);
            setSaveAnswers((prev) => {
                return { ...prev, [quiz.key]: chooseOption }
            });
            setChooseOption('');
        }
    }

    const prev = () => {
        setCurrentQuestion(prev => prev - 1);
    }



    return <QuizContext.Provider value={{ setChooseOption, next, prev, quiz, chooseOption, currentQuestion }}>{children}</QuizContext.Provider>
}


export const useQuiz = () => {
    const contextValue = useContext(QuizContext);

    if (!contextValue) {
        throw new Error("useRunPlan must be used inside of RunProvider");
    }

    return contextValue;
}