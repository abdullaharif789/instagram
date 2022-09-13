import { TOKEN_KEY, SECRET_KEY } from "./constants";
export function getAuthUser() {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
}
