"use server"

import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db";

export const checkIfQuiz = async () => {
    const user = await currentUser();


    const quizData = await db.quiz.findFirst({
        where: {
            userId: user?.id
        }
    });

    return quizData;
}