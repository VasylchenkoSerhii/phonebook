import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import {FormStyle,
    SectionRegisterForm,
    InputForm,
    Label,
    Error,
    FormBtn
} from "./RegisterForm.styled";
import { register } from "redux/auth/operations";

const shema = yup.object().shape({
    name: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Invalid name')
        .required("Name is required"),
    email: yup.string()
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            , 'Invalid email')
        .required("Email is required"),
    password: yup.string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .required("Password is required"),
});

export default function RegisterForm() {

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

    return (
        <SectionRegisterForm>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={shema}
            >
                <FormStyle>
                    <Label>
                        Name
                        <InputForm type="text" name="name" />
                        <Error component="div" name="name" />
                    </Label>
                    <Label>
                        Email
                        <InputForm type="email" name="email" />
                        <Error component="div" name="email" />
                    </Label>
                    <Label>
                        Password
                        <InputForm type="password" name="password" />
                        <Error component="div" name="password" />
                    </Label>
                    <FormBtn type="submit">Register</FormBtn>
                </FormStyle>
            </Formik>
        </SectionRegisterForm>
    );
};
