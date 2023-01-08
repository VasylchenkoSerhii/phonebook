import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    fetchContacts,
    addContact,
    removeContact
} from "./operations";
import {
    fetchContactsReducer,
    addContactReducer,
    removeContactReducer,
    pendingReducer,
    rejectedReducer,
    fulfilledReducer
} from "./caseReducer";

const extraActions = [fetchContacts, addContact, removeContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsReducer)
        .addCase(addContact.fulfilled, addContactReducer)
        .addCase(removeContact.fulfilled, removeContactReducer)
        .addMatcher(getActions("pending"), pendingReducer)
        .addMatcher(getActions("rejected"), rejectedReducer)
        .addMatcher(getActions("fulfilled"), fulfilledReducer)
});

export const contactsReducer = contactsSlice.reducer;
