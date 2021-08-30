import { locationType, utilityType } from "./location.type";

const INITIAL_STATE = {
  province: null,
  regency: null,
  district: null,
  village: null
};

export const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case locationType.STORE_PROVICE:
      return {
        ...state,
        province: action.payload
      };
    case locationType.STORE_REGENCY:
      return {
        ...state,
        regency: action.payload
      };
    case locationType.STORE_DISTRICT:
      return {
        ...state,
        district: action.payload
      };
    case locationType.STORE_VILLAGE:
      return {
        ...state,
        village: action.payload
      };
    default:
      return state;
  }
};