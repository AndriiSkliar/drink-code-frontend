export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserBirthDay = (state) => state.auth.user.birthDay;
export const selectAvatarURL = (state) => state.auth.user.avatarURL;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectToken = (state) => state.auth.token;
export const selectSubscribe = (state) => state.auth.isSubscribed;

export const selectTheme = (state) => state.auth.theme;
