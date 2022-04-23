import { createStore } from "redux";
import { Counter_reducer } from "./reducer";

export const store = createStore(Counter_reducer);