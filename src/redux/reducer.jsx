import { SELECT_LANGUAGE } from "./actions";
import data_es from "../Data/data_es.json";
import data_pt from "../Data/data_pt.json";
import project_es from "../Data/project_es.json";
import project_pt from "../Data/project_pt.json";

const initialState = {
  language: "es",
  data: data_es,
  projects: project_es,
};

const selectLanguage = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return {
        ...state,
        language: action.payload === data_pt ? "pt" : "es",
        data: action.payload,
        projects: action.payload === data_pt ? project_pt : project_es,
      };
    default:
      return { ...state };
  }
};

export default selectLanguage;
