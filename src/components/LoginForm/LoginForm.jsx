import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyle,
  SectionRegisterForm,
  InputForm,
  Label,
  Error,
  FormBtn,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

const shema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required('Password is required'),
});

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
            Email
            <InputForm type="email" name="email" />
            <Error component="div" name="email" />
          </Label>
          <Label>
            Password
            <InputForm type="password" name="password" />
            <Error component="div" name="password" />
          </Label>
          <FormBtn type="submit">Log in</FormBtn>
        </FormStyle>
      </Formik>
    </SectionRegisterForm>
  );
}
