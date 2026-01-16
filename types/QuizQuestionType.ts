export type QuizOption = {
    label: string;
    value: string | number | boolean;
};


export type QuizQuestionType = {
    id: number;
    key: string;
    question: string;
    type: "options" | "input";
    options?: QuizOption[];
    inputType?: "text" | "number" | "time";
    placeholder?: string;
}


export type MainGoal =
    | "start_running"
    | "run_distance"
    | "improve_5k"
    | "post_injury";