import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { fetchContacts } from "redux/contacts/operations";
import ContactsList from "components/ContactsList/ContactsList";
import FormContacts from "components/FormContacts/FormContacts";

export default function Contacts() {
    const dispatch = useDispatch()
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            <FormContacts />
            {contacts.length > 0 ? <ContactsList /> : <p>Add your first number</p>}
        </>
    );
};
