'use client'
import { useQuiz } from '@/context/QuizContext';
import { quizQuestions } from '@/quiz-data/quiz.data';

const Quiz = () => {
    const { quiz, setChooseOption, chooseOption, next, prev, currentQuestion } = useQuiz()
    const lastQuestion = quizQuestions.length - 1 === currentQuestion;

    return (
        <div className='max-w-3xl mx-auto border-2 border-gray-300 rounded-lg p-10 bg-white shadow-lg'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>Опитувальник</h1>
            <span className='block text-lg mb-4 text-gray-700'>{quiz.question}</span>
            {quiz.type === "options" ? (
                <select
                    onChange={(e) => setChooseOption(e.target.value)}
                    value={chooseOption}
                    className='w-full p-3 border-2 border-gray-300 rounded-lg mb-6 bg-white text-gray-700 focus:border-blue-500 focus:outline-none cursor-pointer'
                >
                    {quiz.options?.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

            ) : (
                <input
                    className='w-full p-3 border-2 border-gray-300 rounded-lg mb-6 bg-white text-gray-700 focus:border-blue-500 focus:outline-none'
                    type="text"
                    placeholder={quiz?.placeholder}
                    onChange={(e) => setChooseOption(e.target.value)}
                />
            )}

            <div className='flex items-center justify-between gap-4'>
                <button
                    className='px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors cursor-pointer'
                    onClick={prev}
                >
                    Назад
                </button>
                <button
                    className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={next}
                    disabled={chooseOption === ''}
                >
                    {lastQuestion ? "Фініш" : "Вперед"}
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