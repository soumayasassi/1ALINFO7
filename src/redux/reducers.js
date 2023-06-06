import { combineReducers } from "redux";
import counter from './counterSlice'
import products from "./ProductsSlice"
import  cart from "./cartSlices"
const reducers = combineReducers({

counter, 
products , 
cart , 

})
export default reducers