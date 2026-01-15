export const quizQuestions = [
    {
        id: 1,
        key: "experienceLevel",
        question: "Який у тебе рівень?",
        type: "options",
        options: [
            { label: "🟢 Новачок (менше 10 км/тиждень)", value: "beginner" },
            { label: "🟡 Середній (10–30 км/тиждень)", value: "intermediate" },
            { label: "🔴 Просунутий (30+ км)", value: "advanced" }
        ]
    },
    {
        id: 2,
        key: "runsPerWeek",
        question: "Скільки разів на тиждень ти хочеш бігати?",
        type: "options",
        options: [
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
            { label: "5", value: 5 },
            { label: "6", value: 6 }
        ]
    },
    {
        id: 3,
        key: "longRunDay",
        question: "В який день ти хочеш long run?",
        type: "options",
        options: [
            { label: "Понеділок", value: "monday" },
            { label: "Вівторок", value: "tuesday" },
            { label: "Середа", value: "wednesday" },
            { label: "Четвер", value: "thursday" },
            { label: "П'ятниця", value: "friday" },
            { label: "Субота", value: "saturday" },
            { label: "Неділя", value: "sunday" }
        ]
    },
    {
        id: 4,
        key: "pace5k",
        question: "Твій темп на 5 км?",
        type: "input",
        inputType: "time",
        placeholder: "Наприклад 5:55"
    },
    {
        id: 5,
        key: "mainGoal",
        question: "Головна ціль",
        type: "options",
        options: [
            { label: "Похудіння", value: "weight_loss" },
            { label: "Витривалість", value: "endurance" },
            { label: "Швидкість", value: "speed" }
        ]
    },
    {
        id: 6,
        key: "wantsIntervals",
        question: "Хочеш інтервали?",
        type: "options",
        options: [
            { label: "Так", value: "true" },
            { label: "Ні", value: "false" }
        ]
    },
    {
        id: 7,
        key: "hasInjuries",
        question: "Є травми?",
        type: "options",
        options: [
            { label: "Так", value: "true" },
            { label: "Ні", value: "false" }
        ]
    }
]
