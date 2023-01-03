import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});