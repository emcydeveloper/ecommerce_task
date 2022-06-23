import { useContext } from "react";
import { context } from "./App";

export function DisplayItems() {
  let { product, dispatch } = useContext(context);

  function handleAddToCart(getID) {
    dispatch({ type: "addedToCart", productId: getID });
  }

  return (
    <div className="main-container">
      {product.productList.map((items, index) => (
        <div key={index} className="products">
          <h4>{items.tag}</h4>
          <h1>{items.productName}</h1>
          <img
            className="product-image"
            src="https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-black-gallery-1.png?v=1"
            alt="comes here"
          ></img>
          {items.cartStatus ? <button className="add-to-cart"> Added </button> : <button className="add-to-cart" onClick={() => handleAddToCart(items.id)}>Add to Cart</button>}

          <h4 className="product-price">₹ {items.productPrice}</h4>
        </div>
      ))}
    </div>
  );
}
