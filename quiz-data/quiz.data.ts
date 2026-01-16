import { QuizQuestionType } from "@/types/QuizQuestionType";

export const mainGoalQuestion: QuizQuestionType = {
    id: 1,
    key: "mainGoal",
    question: "Яка твоя головна мета?",
    type: "options",
    options: [
        { label: "🏁 Почати бігати", value: "start_running" },
        { label: "📏 Пробігти певну дистанцію", value: "run_distance" },
        { label: "⚡ Покращити 5 км", value: "improve_5k" },
        { label: "🩹 Відновлення після травми", value: "post_injury" }
    ]
};

export const goalBasedQuestions: Record<string, QuizQuestionType[]> = {
    start_running: [
        {
            id: 2,
            key: "experienceLevel",
            question: "Чи маєш досвід бігу?",
            type: "options",
            options: [
                { label: "Новачок", value: "beginner" },
                { label: "Бігав раніше", value: "returning" }
            ]
        },
        {
            id: 3,
            key: "runsPerWeek",
            question: "Скільки разів на тиждень готовий бігати?",
            type: "options",
            options: [2, 3, 4].map(n => ({ label: String(n), value: n }))
        }
    ],

    run_distance: [
        {
            id: 2,
            key: "targetDistance",
            question: "Яку дистанцію хочеш пробігти?",
            type: "options",
            options: [
                { label: "5 км", value: 5 },
                { label: "10 км", value: 10 },
                { label: "21 км", value: 21 }
            ]
        },
        {
            id: 3,
            key: "currentWeeklyMileage",
            question: "Скільки км зараз бігаєш на тиждень?",
            type: "input",
            inputType: "number",
            placeholder: "Наприклад 20"
        }
    ],

    improve_5k: [
        {
            id: 2,
            key: "pace5k",
            question: "Твій поточний темп на 5 км?",
            type: "input",
            inputType: "time",
            placeholder: "5:30"
        },
        {
            id: 3,
            key: "wantsIntervals",
            question: "Хочеш інтервальні тренування?",
            type: "options",
            options: [
                { label: "Так", value: true },
                { label: "Ні", value: false }
            ]
        }
    ],

    post_injury: [
        {
            id: 2,
            key: "injuryType",
            question: "Яка травма?",
            type: "options",
            options: [
                { label: "Коліно", value: "knee" },
                { label: "Ахіл", value: "achilles" },
                { label: "Гомілка", value: "shin" }
            ]
        },
        {
            id: 3,
            key: "doctorAllowedRunning",
            question: "Лікар дозволив біг?",
            type: "options",
            options: [
                { label: "Так", value: true },
                { label: "Ні", value: false }
            ]
        }
    ]
};

// export const quizQuestions = [
//     {
//         id: 2,
//         key: "maingoal",
//         question: "Яка твоя ціль?",
//         type: "options",
//         options: [
//             { label: "🗻 Пробігти певну відстань.", value: "beginner" },
//             { label: "🟡 Середній (10–30 км/тиждень)", value: "intermediate" },
//             { label: "🔴 Просунутий (30+ км)", value: "advanced" }
//         ]
//     },
//     {
//         id: 2,
//         key: "experienceLevel",
//         question: "Який у тебе рівень?",
//         type: "options",
//         options: [
//             { label: "🟢 Новачок (менше 10 км/тиждень)", value: "beginner" },
//             { label: "🟡 Середній (10–30 км/тиждень)", value: "intermediate" },
//             { label: "🔴 Просунутий (30+ км)", value: "advanced" }
//         ]
//     },
//     {
//         id: 3,
//         key: "runsPerWeek",
//         question: "Скільки разів на тиждень ти хочеш бігати?",
//         type: "options",
//         options: [
//             { label: "2", value: 2 },
//             { label: "3", value: 3 },
//             { label: "4", value: 4 },
//             { label: "5", value: 5 },
//             { label: "6", value: 6 }
//         ]
//     },
//     {
//         id: 4,
//         key: "longRunDay",
//         question: "В який день ти хочеш long run?",
//         type: "options",
//         options: [
//             { label: "Понеділок", value: "monday" },
//             { label: "Вівторок", value: "tuesday" },
//             { label: "Середа", value: "wednesday" },
//             { label: "Четвер", value: "thursday" },
//             { label: "П'ятниця", value: "friday" },
//             { label: "Субота", value: "saturday" },
//             { label: "Неділя", value: "sunday" }
//         ]
//     },
//     {
//         id: 5,
//         key: "pace5k",
//         question: "Твій темп на 5 км?",
//         type: "input",
//         inputType: "time",
//         placeholder: "Наприклад 5:55"
//     },
//     {
//         id: 6,
//         key: "mainGoal",
//         question: "Головна ціль",
//         type: "options",
//         options: [
//             { label: "Похудіння", value: "weight_loss" },
//             { label: "Витривалість", value: "endurance" },
//             { label: "Швидкість", value: "speed" }
//         ]
//     },
//     {
//         id: 7,
//         key: "wantsIntervals",
//         question: "Хочеш інтервали?",
//         type: "options",
//         options: [
//             { label: "Так", value: "true" },
//             { label: "Ні", value: "false" }
//         ]
//     },
//     {
//         id: 8,
//         key: "hasInjuries",
//         question: "Є травми?",
//         type: "options",
//         options: [
//             { label: "Так", value: "true" },
//             { label: "Ні", value: "false" }
//         ]
//     }
// ]
