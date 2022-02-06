import axios from "axios";
const baseURL = "http://localhost:1337";
const fetchPortFolio = async (path) => {
  const url = `${baseURL}/${path}`;
  const res = await axios.get(url);
  return res.data;
};

const addPortFolio = async (path) => {
  const url = `${baseURL}/${path}`;
  const res = await axios.post(url);
  return res.data;
};

export { fetchPortFolio, addPortFolio };
