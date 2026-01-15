"use server"
import Quiz from "@/components/quiz/Quiz";
import { checkIfQuiz } from "@/lib/actions/checkIfQuiz";

export default async function Home() {
  const ifQuizExist = await checkIfQuiz()
  return (
    <div>{!ifQuizExist && <Quiz />}</div>
  );
}
