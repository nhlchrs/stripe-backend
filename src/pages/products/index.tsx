import * as ClientProduct from "@data/product.json";

import { useParams } from "react-router-dom";

const Products = () => {
    const params = useParams();
    console.log("Debugger", params);
    return (<>Products Page</>)
}

export default Products;