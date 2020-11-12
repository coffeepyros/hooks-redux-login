export function register(data) {
  return {
    type: "REGISTER",
    payload: data,
  };
}
export function login(data) {
  return {
    type: "LOGIN_TRY",
    payload: data,
  };
}
export function loginSuccess() {
  return {
    type: "LOGIN_SUCCESS",
  };
}
export function showAlert() {
  return {
    type: "SHOW_ALERT",
  };
}
export function hideAlert() {
  return {
    type: "HIDE_ALERT",
  };
}
export function showRegister() {
  return {
    type: "SHOW_REGISTER",
  };
}
export function showLogin() {
  return {
    type: "SHOW_LOGIN",
  };
}
