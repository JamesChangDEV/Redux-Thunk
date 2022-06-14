import { Reducer } from "redux";
import { ZipActionTypes, ZipState } from "./types";

export const initialState: ZipState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<ZipState> = (state = initialState, action) => {
  switch (action.type) {
    case ZipActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case ZipActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload, errors: "" };
    }
    case ZipActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: "Zip code invalid or not found"
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as ZipReducer };
