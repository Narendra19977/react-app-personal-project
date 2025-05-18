import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice"
import createSagaMiddleware from "redux-saga";
import getProductsSaga from "./productsSaga";

const sagaMiddleware=createSagaMiddleware()
const store = configureStore({
    reducer:{
        productList:productsReducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
    }
})
sagaMiddleware.run(getProductsSaga)
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export default store