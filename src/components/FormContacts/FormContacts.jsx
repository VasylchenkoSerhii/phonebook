import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { FormStyle, FormBtn, SectionForm } from './FormContacts.styled';
import * as yup from 'yup';

const shema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    )
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid number'
    )
    .required('Number is required'),
});

export default function FormContacts() {
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name || item.number === number
    );
    return result;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: shema,
    onSubmit: (values, { resetForm }) => {
      if (isDublicate(values)) {
        toast('this name or number is already added to contacts');
        resetForm();
        return;
      }
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <SectionForm>
      <FormStyle onSubmit={formik.handleSubmit}>
        <TextField
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          id="name"
          label="Name"
          name="name"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          required
          value={formik.values.number}
          onChange={formik.handleChange}
          id="number"
          label="Number"
          name="number"
          type="tel"
          margin="normal"
          variant="outlined"
          size="small"
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        {/* <Label>
            Name
            <InputForm
              type="text"
              name="name"
              placeholder="Vasylchenko Serhii"
            />
            <Error component="div" name="name" />
          </Label>
          <Label>
            Number
            <InputForm type="tel" name="number" placeholder="+380" />
            <Error component="div" name="number" />
          </Label> */}
        <FormBtn type="submit">Add contact</FormBtn>
      </FormStyle>
    </SectionForm>
  );
}
