import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//defaultValues
const defaultValues = {
    email: '',
    password: ''
}

//validation
const schema = Yup.object({
    email: Yup.string().email().max(255).required().label('Email'),
    password: Yup.string().min(6).required().label('Password')
});

//schema
const LoginSchema = {
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
}

//type
export type loginFormType = Yup.InferType<typeof schema>;

//form hook
export const form = () => {
    return useForm<loginFormType>(LoginSchema);
};