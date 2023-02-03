// import rootreduce from reduce
import rootReducer from "../Reducers/rootReducer";

// import createstore to store rootreduce
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
