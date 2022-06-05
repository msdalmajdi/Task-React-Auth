import { makeAutoObservable, observable, action } from "mobx";
import instance from "./instance";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signup = async (userData) => {
    try {
      console.log("user data from sign up", userData);
      const response = await instance.post("/signup", userData);
      console.log(response);
      console.log("This the response from background", response);
    } catch (error) {
      console.log(
        "🚀 ~ file: productStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
        error
      );
    }
  };

  signin = async (userData) => {
    try {
      const response = await instance.post("/signin", userData);
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
