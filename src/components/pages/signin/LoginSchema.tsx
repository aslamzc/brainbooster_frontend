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
    email: Yup.string().email("text_38").max(255).required("text_36").label('Email'),
    password: Yup.string().min(6, "text_37").max(255).required().label('Password')
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