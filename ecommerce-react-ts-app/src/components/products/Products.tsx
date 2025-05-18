import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import { useEffect } from "react";
import { getPrdouctsFetch } from "../../state/productSlice";
import Product from "./Product";

function Products() {
  const products = useSelector(
    (state: RootState) => state.productList.products
  );
  const { isLoading } = useSelector(
    (state: RootState) => state.productList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrdouctsFetch());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <h1>product is being fetched from api </h1>
      ) : (
        products.map((product) => (
          <Product {...product}/>
        ))
      )}
    </div>
  );
}

export default Products;
