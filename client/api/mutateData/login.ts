import { postData } from "..";

const registerUser = async (data: Object) => {
  return await postData("/auth/register", data);
};
