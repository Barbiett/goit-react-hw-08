import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/filtersSlice";
export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (selectNameFilter, selectContacts) => {
    const filteredContacts = selectContacts.filter((selectContact) =>
      selectContact.name
        .toLowerCase()
        .trim()
        .includes(selectNameFilter.toLowerCase().trim())
    );
    return filteredContacts;
  }
);

export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;
