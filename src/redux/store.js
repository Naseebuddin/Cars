import { createStore } from "redux";
import { reducers  } from "./reducer/reducers";
export const  myStore= createStore(reducers);