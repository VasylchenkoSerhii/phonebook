import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectContacts,
  selectIsLoading,
  selectError
} from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Container, Main } from "./App.styled";
import FormContacts from "../FormContacts/FormContacts";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import Loader from "components/Loader/Loader";


export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) return;

  return (
    <Main>
      <Container>
        <FormContacts />
        <Filter />
        {contacts.length > 0 && <ContactsList />}
        {isLoading && <Loader />}
      </Container>
      {error && toast(`${error}`)}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </Main>
  );
};

