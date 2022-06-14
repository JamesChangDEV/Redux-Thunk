import axios from "axios";
import { ZipActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = (zipCode) => {
  return (dispatch: Dispatch): Action => {
    axios
      .get(`https://api.zippopotam.us/us/${zipCode}`)
      .then((data) =>
        dispatch({
          type: ZipActionTypes.FETCH_SUCCESS,
          payload: data.data
        })
      )
      .catch((e) => {
        return dispatch({
          type: ZipActionTypes.FETCH_ERROR
        });
      });
  };
};
