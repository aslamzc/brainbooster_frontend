import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export { Controller }

//validation
const schema = Yup.object({
    title: Yup.string().required().label('Title'),
    description: Yup.string().required().label('Description'),
    language: Yup.object().required().label('Language').transform((_, originalValue) => {
        return originalValue === '' ? null : originalValue;
    }),
    status: Yup.object().required().label('Status').transform((_, originalValue) => {
        return originalValue === '' ? null : originalValue;
    }),
    questions: Yup.array().of(Yup.object().shape({
        question: Yup.string().required().label('Question'),
        answer: Yup.array().of(Yup.string().required().label('Answer')),
        correctAnswer: Yup.object().required().label('Correct Answer').transform((_, originalValue) => {
            return originalValue === '' ? null : originalValue;
        })
    }))
});

//type
export type QuizCreateFormType = Yup.InferType<typeof schema>;

//form hook
export const form = (defaultValues: QuizCreateFormType) => {
    const QuizCreateSchema = {
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    }
    return useForm<QuizCreateFormType>(QuizCreateSchema);
};

export type QuestionType = {
    question: string,
    answer: Array<string>
    correctAnswer: number | null
}

export const questionObj = {
    question: "",
    answer: [
        "",
        "",
        "",
        ""
    ],
    correctAnswer: ''
}

export const correctAnswerArr = [
    { value: 0, label: "Answer 1" },
    { value: 1, label: "Answer 2" },
    { value: 2, label: "Answer 3" },
    { value: 3, label: "Answer 4" },
]