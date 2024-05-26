export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsError = (state) => state.auth.error;

export const selectIsLoading = (state) => state.auth.loading;

export const selectIsErrorRegister = (state) => state.auth.errorRegister;
export const selectIsErrorAuthorization = (state) =>
  state.auth.errorAuthorization;
