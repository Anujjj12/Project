import { getPokemonAPI } from "@/common/apiConstants";
import axios from "axios";
import { setPokemonList } from "./redux/actionCreator";

export const getPokemon = (dispatch) => {
  return axios
    .get(getPokemonAPI)
    .then(({ data }) => {
      dispatch(setPokemonList(data.results));
    })
    .catch((err) => err);
};

export const getPokemonDetail = (param) => {
  return axios
    .get(`${getPokemonAPI}/${param}/`)
    .then((data) => data)
    .catch((err) => err);
};

export const getDEtails = (params) => {
  return axios
    .get("", {
      params: { name: "Vrushti", ...params },
    })
    .then((data) => data)
    .catch((err) => err);
};

export const setDetails = (payload) => {
  return axios
    .post("", payload, {})
    .then((data) => data)
    .catch((err) => err);
};

export const resp = [
  {
    category: "XYZ",
    id: "123",
    dataList: [{ name: "Vrushti", surn: "Shah" }],
  },
];
