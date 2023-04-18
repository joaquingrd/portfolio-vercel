import data_es from "../Data/data_es.json";
import data_pt from "../Data/data_pt.json";

export const SELECT_LANGUAGE = "SELECT_LANGUAGE";

export const selectLanguage = (language) => {
  const data = language === "es" ? data_es : data_pt;
  return {
    type: SELECT_LANGUAGE,
    payload: data,
  };
};
