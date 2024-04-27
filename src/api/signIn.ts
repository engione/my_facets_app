import { api } from "./config"

export const sigIn = (email: string, password: string) => {
    api
    .post("/auth/signin", {
      email: email,
      password: password,
    }).then(({ data }) => {return data}).catch((error) => {
        return error;
      });

}