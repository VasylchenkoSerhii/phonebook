import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "redux/operations";
import { selectContacts, selectFilter } from "redux/selectors";
import {
    ListItem,
    List,
    Number,
    RemoveContactBtn
} from "./ContactsList.styled";

export default function ContactsList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const  getFilteredContacts = () => {

        if (!filter) {
        return contacts;
        };

        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
        });

        return filteredContacts;
    };

    const filterContacts = getFilteredContacts();

    const markup = filterContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
            <p>
                {name}: <Number>{phone}
                        <RemoveContactBtn type="button" onClick={() => dispatch(removeContact(id))}>
                            Delete
                        </RemoveContactBtn>
                </Number>
            </p>
        </ListItem>
    ));
    return (
        <List>
            {markup}
        </List>
    );
};
