import jwt from "jwt-decode";
import { TOKEN_KEY } from "./constants";
export function getAuthUser() {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    return jwt(token);
  }
  return null;
}
export function getAuthToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
}
