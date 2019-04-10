import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-af40f.firebaseio.com/"
});

export default instance;
