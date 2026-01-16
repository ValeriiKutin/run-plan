'use client'
import { useQuiz } from '@/context/QuizContext';
import { mainGoalQuestion } from '@/quiz-data/quiz.data';
// import { quizQuestions } from '@/quiz-data/quiz.data';
import { useUser } from '@clerk/nextjs';

const Quiz = () => {
    const { currentQuestionData, setSelectedOption, selectedOption, next, prev, currentQuestion, lastQuestion } = useQuiz();
    // const lastQuestion = quizQuestions.length - 1 === currentQuestion;
    const { user, isLoaded } = useUser();


    return (
        <div className='max-w-3xl mx-auto border-2 border-gray-300 rounded-lg p-10 bg-white shadow-lg'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>{isLoaded && `Привіт, ${user?.firstName} ${user?.lastName ? user?.lastName : ""}✌️`}</h1>
            <span className='block text-lg mb-4 text-gray-700'>{currentQuestionData.question}</span>
            {currentQuestionData.type === "options" ? (
                <select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    value={selectedOption}
                    className='w-full p-3 border-2 border-gray-300 rounded-lg mb-6 bg-white text-gray-700 focus:border-blue-500 focus:outline-none cursor-pointer'
                >
                    <option value='' disabled>
                        Оберіть варіант
                    </option>
                    {currentQuestionData.options?.map((option, index) => (
                        <option key={index} value={String(option.value)}>
                            {option.label}
                        </option>
                    ))}
                </select>

            ) : (
                <input
                    className='w-full p-3 border-2 border-gray-300 rounded-lg mb-6 bg-white text-gray-700 focus:border-blue-500 focus:outline-none'
                    type="text"
                    placeholder={currentQuestionData?.placeholder}
                    onChange={(e) => setSelectedOption(e.target.value)}
                />
            )}

            <div className='flex items-center justify-between gap-4'>
                <button
                    className='px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={prev}
                    disabled={currentQuestion === 0}
                >
                    Назад
                </button>
                <button
                    className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={next}
                    disabled={selectedOption === ''}
                >
                    {currentQuestionData.key === "mainGoal" ? "Продовжити" : lastQuestion ? "Фініш" : "Вперед"}
                </button>
            </div>
        </div>
    )
}

export default Quiz;


/* 
    з'являється питання і варіанти відповіді
    я тикаю на відповідь, вони записується в об'єкт потрібний і з'являється інше питання і варіанти відповідей
    на останньому питанні повертається об'єкт відповідей
*/