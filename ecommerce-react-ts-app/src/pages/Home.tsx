import { lazy ,Suspense} from "react"
const Products = lazy(()=>import("../components/products/Products"))
// import Products from "../components/Products"
function Home(){
    return <div>
        <h3>Home</h3>
        <Suspense fallback={<h1>Product component is missing</h1>}>
            <Products/>
        </Suspense>
    </div>
}
export default Home