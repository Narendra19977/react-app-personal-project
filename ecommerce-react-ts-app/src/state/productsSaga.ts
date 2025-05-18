import { call, put, takeEvery } from "redux-saga/effects";
import type { ProductType } from "../components/products/Products.type";
import { getProductsFailure, getProductsSuccess } from "./productSlice";

function* getProductsSaga() {
  yield takeEvery("products/getPrdouctsFetch", workGetProductsFetch);
}
function* workGetProductsFetch() {
  try {
    const rawProducts: Response = yield call(() =>
      fetch("https://api.escuelajs.co/api/v1/products/")
    );
    if (rawProducts.status >= 400) {
      yield put(getProductsFailure(rawProducts.status));
    } else {
      const jsonProducts: ProductType[] = yield rawProducts.json();
      yield put(getProductsSuccess(jsonProducts));
    }
  } catch (err) {
    yield put(getProductsFailure(err));
  }
}
export default getProductsSaga;
