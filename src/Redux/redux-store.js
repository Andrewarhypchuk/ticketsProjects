import {combineReducers, createStore} from "redux";
import JiraReducer from "./JiraReducer";

let reducers = combineReducers({
    tickets:JiraReducer
})
let store = createStore(reducers);
window.store = store;
export default store;

