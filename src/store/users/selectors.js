import { createSelector } from "reselect";

export const getUsers = state => state.users;

export const getUserById = (state, userId) => getUsers(state).get(userId);

//= ====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentUser = createSelector(getUsers, users =>
  users.get(users.get("currentUserId"))
);
