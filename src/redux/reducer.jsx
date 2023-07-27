import { SELECT_LANGUAGE, SELECT_MODE } from "./actions";

import data_es from "../Data/data_es.json";
import data_pt from "../Data/data_pt.json";
import project_es from "../Data/project_es.json";
import project_pt from "../Data/project_pt.json";
import testimonios_es from "../Data/testimonios_es.json";
import testimonios_pt from "../Data/testimonios_pt.json";

const initialState = {
  language: "es",
  data: data_es,
  projects: project_es,
  testimonios: testimonios_es,
  mode: "ligth",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return {
        ...state,
        language: action.payload === data_pt ? "pt" : "es",
        data: action.payload,
        projects: action.payload === data_pt ? project_pt : project_es,
        testimonios:
          action.payload === data_pt ? testimonios_pt : testimonios_es,
      };

    case SELECT_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
