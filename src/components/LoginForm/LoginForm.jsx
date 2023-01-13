import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { SectionRegisterForm } from './LoginForm.styled';
import { FormBtn } from './LoginForm.styled';
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

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch(logIn(values));
  //   resetForm();
  // };

  const formik = useFormik({
    initialValues,
    validationSchema: shema,
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
  });

  return (
    <SectionRegisterForm>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          label="Email"
          name="email"
          type="email"
          margin="normal"
          variant="outlined"
          size="small"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          label="Password"
          name="password"
          type="password"
          margin="normal"
          variant="outlined"
          size="small"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {/* <Label>
            Email
            <InputForm type="email" name="email" />
            <Error component="div" name="email" />
          </Label>
          <Label>
            Password
            <InputForm type="password" name="password" />
            <Error component="div" name="password" />
          </Label> */}
        <FormBtn type="submit">Log in</FormBtn>
      </form>
    </SectionRegisterForm>
  );
}
