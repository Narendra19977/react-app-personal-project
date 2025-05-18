import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../components/products/Products.type";

interface StateType{
    products:ProductType[];
    isLoading:boolean;
    err:{}
}
const initialState:StateType={
    products:[],
    isLoading:false,
    err:{}
}
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getPrdouctsFetch:(state)=>{
            state.isLoading=true
            console.log(state)
        },
        getProductsSuccess:(state,action)=>{
            state.products=action.payload;
            console.log(action.payload)
            state.isLoading=false
        },
        getProductsFailure:(state,action)=>{
            state.isLoading = false
            state.err=action.payload
        }
    }
})

export const {getPrdouctsFetch,getProductsSuccess,getProductsFailure} = productsSlice.actions
export default productsSlice.reducer