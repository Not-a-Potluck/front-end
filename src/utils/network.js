import axios from "axios";
import requester from "easier-requests";

export function axiosWithAuth() {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "https://lre-notapotluck.herokuapp.com",
  });
}

export async function storeLoginInformation(token, username) {
  try {
    localStorage.setItem("token", token);
    requester.setOptions({ headers: { Authorization: `Bearer ${token}` } });
    debugger;
    const id = requester.createUniqueID();
    await requester.get(
      "https://lre-notapotluck.herokuapp.com//users/users",
      id
    );
    const users = requester.response(id).data;
    console.log(users);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
