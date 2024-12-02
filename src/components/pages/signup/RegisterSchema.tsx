import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//defaultValues
const defaultValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

//validation
const schema = Yup.object({
    name: Yup.string().min(3, "text_39").max(255).required().label('Name'),
    email: Yup.string().email("text_38").max(255).required("text_36").label('Email'),
    password: Yup.string().min(8, "text_37").max(255).required().label('Password'),
    password_confirmation: Yup.string().oneOf([Yup.ref('password')]).min(8, "text_37").max(255).required().label('Confirm Password')
});

//schema
const RegisterSchema = {
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
}

//type
export type RegisterFormType = Yup.InferType<typeof schema>;

//form hook
export const form = () => {
    return useForm<RegisterFormType>(RegisterSchema);
};