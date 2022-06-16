import { legacy_createStore as createStore, combineReducers } from "redux";
import { AllProductReducer } from "./categoryRedux/categoryReducer";

const rootReducer = combineReducers({ AllProductReducer });

export const store = createStore(rootReducer);
