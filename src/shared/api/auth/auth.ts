import { account } from "../../config/appwriteConfig";
import { ID } from "appwrite";

export const signIn = (email: string, password: string, name: string) => {
  return account
    .create(ID.unique(), email, password, name)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const logIn = (email: string, password: string) => {
  return account.createEmailSession(email, password).then(() => {
    return account
      .get()
      .then((userData) => {
        return userData;
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const logOut = () => {
  return account
    .deleteSession("current")
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
    });
};

