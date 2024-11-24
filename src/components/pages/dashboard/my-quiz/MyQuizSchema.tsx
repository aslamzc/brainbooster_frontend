import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export { Controller }

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

//defaultValues
const defaultValues = {
    title: '',
    description: '',
    language: '',
    status: '',
    questions: [questionObj]
}

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

//schema
const QuizCreateSchema = {
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
}

//type
export type QuizCreateFormType = Yup.InferType<typeof schema>;

//form hook
export const form = () => {
    return useForm<QuizCreateFormType>(QuizCreateSchema);
};

export type QuestionType = {
    question: string,
    answer: Array<string>
    correctAnswer: number | null
}