"use server"
import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db";
import { QuizAnswersType } from "@/types/QuizAnswersType";
import { revalidatePath } from "next/cache";



export const createQuiz = async (quizAnswers: QuizAnswersType) => {
    const user = await currentUser();

    if (!user) {
        return [];
    }

    await db.quiz.create({
        data: {
            data: quizAnswers,
            userId: user.id
        }
    });

    revalidatePath('/plan');
}