import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

// import zipSaga from "./zip/sagas";
import { ZipReducer } from "./zip/reducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    zip: ZipReducer,
    router: connectRouter(history)
  });
