import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  composeWithDevTools()
);

export default function getStore(reducer: any) {
  const store = createStore(reducer, initialState, composedEnhancers);
  return store;
}
