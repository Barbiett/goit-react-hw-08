import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);

export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;
