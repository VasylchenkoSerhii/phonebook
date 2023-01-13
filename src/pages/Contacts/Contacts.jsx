import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from './Contaxts.styled';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import FormContacts from 'components/FormContacts/FormContacts';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <FormContacts />
      {contacts.length > 0 ? (
        <>
          <Filter />
          {loading && <Loader>Loading...</Loader>}
          <ContactsList />
        </>
      ) : (
        <p>Add your first number</p>
      )}
    </>
  );
}
