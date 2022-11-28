import axios from "axios";

const APIVOne = axios.create({
  baseURL: process.env.REACT_APP_BASEURL_V_ONE,
});

APIVOne.interceptors.request.use((req) => {
  return req;
});
const APIVTwo = axios.create({
  baseURL: process.env.REACT_APP_BASEURL_V_TWO,
});

APIVTwo.interceptors.request.use((req) => {
  return req;
});

export { APIVOne, APIVTwo };

