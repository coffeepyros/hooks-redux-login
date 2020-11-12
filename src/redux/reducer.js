const initialState = {
  users: [], // list of all users
  //   register: { fname: "", lname: "", email: "", pwd: "" }, // registration data
  registerDisplay: false,
  registerSuccess: false,
  login: { email: "", password: "" }, // login data
  loginDisplay: false,
  loginSuccess: false,
  alert: false, // flag for alert overlay
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
        registerDisplay: false,
      };
    case "LOGIN_TRY":
      let found = state.users.filter((user) => {
        return (
          state.login.email === user.email &&
          state.login.password === user.password
        );
      });
      console.log("FOUND FROM REDUCER:", found);
      return { ...state, login: action.payload };
    case "LOGIN_SUCCESS":
      return { ...state, loginSuccess: true };
    case "SHOW_ALERT":
      return { ...state, alert: true };
    case "HIDE_ALERT":
      return { ...state, alert: false };
    case "SHOW_REGISTER":
      return { ...state, registerDisplay: true, loginDisplay: false };
    case "SHOW_LOGIN":
      return { ...state, loginDisplay: true, registerDisplay: false };
    default:
      return state;
  }
}
