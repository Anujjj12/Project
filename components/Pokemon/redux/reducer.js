import { SET_POKEMON_LIST } from "./actions";

export const pokemonReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_POKEMON_LIST:
      return payload;
    default:
      return state;
  }
};
