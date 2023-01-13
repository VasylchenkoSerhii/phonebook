import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import { SectionFilter } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <SectionFilter>
      <TextField
        id="filter"
        size="small"
        value={filter}
        onChange={handleChange}
        label="Find the contact"
        variant="outlined"
      />
    </SectionFilter>
  );
}
