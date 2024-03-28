import { pokemonReducer } from "@/components/Pokemon/redux/reducer";
import { combineReducers } from "redux";

export const userDetails = (state = {}, action) => {
  switch (action.type) {
    case "USER_DETAILS": {
      return action.payload;
    }
    case "CLEAR_USER_DETAILS": {
      return {};
    }
    default: {
      return state;
    }
  }
};
export default combineReducers({ userDetails, pokemonReducer });
