import { SELECT_LANGUAGE } from "./actions";
import data_es from "../data/data_es.json";
import data_pt from "../data/data_pt.json";

const initialState = {
  language: "es",
  data: data_es,
};

const selectLanguage = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return {
        ...state,
        language: action.payload === data_pt ? "pt" : "es",
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default selectLanguage;
