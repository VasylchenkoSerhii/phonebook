// Contacts
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
// Filter
export const selectFilter = state => state.filter;
// Auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserEmail = state => state.auth.user.email;