import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export { Controller }

//defaultValues
const defaultValues = {
    title: '',
    description: '',
    language: '',
    status: '',
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

export const questionObj = {
    question: "",
    answer: [
        "",
        "",
        "",
        ""
    ],
    correctAnswer: null
}

export type QuestionType = {
    question: string,
    answer: Array<string>
    correctAnswer: number | null
}