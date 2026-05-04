import type { ProductDisplayProps } from "../../types";

const blue = {
    color:"blue"
}

const red = {
    color:"red"
}

const green = {
    color:"green"
}
export default function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {

    return(
        <div>
            <img src={product.imageUrl}></img>
            <h3>{product.name}</h3>
            <h2 style={blue}>${product.price}</h2>
            {showDescription && <p>{product.description}</p>}
            {showStockStatus && <p style = {product.inStock ? green: red}>{product.inStock ? "In Stock": "Out of stock"}</p>}
            <button onClick={()=> onAddToCart?.(product.id)}>Add to Cart</button>
            <div>{children}</div>
            </div>
    )
}