//File created on 06-05-2024  10:30PM 

import {createStore,combineReducers,applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension'; //06-05-2024 10:48PM

import thunk from 'redux-thunk'; //06-05-2024 10:52PM

import  {getProductsReducer} from './reducers/productReducer';  //07-05-2024 9:27 PM

const reducer = combineReducers({
    getProducts: getProductsReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
