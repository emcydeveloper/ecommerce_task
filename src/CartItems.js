import { useContext, useState } from "react";
import { context } from "./App";
import { Header } from "./Header";


export function CartItems() {

  

let [totalAmount, setTotalAmount] = useState(0);
  let { product, dispatch } = useContext(context);

  function handleRemoveCart(getID) {
    dispatch({ type: "removeFromCart", productId: getID });
  }

  function handleAddQuanty(getID) {
    dispatch({ type: "handleAddQuanty", productId: getID });
  }

  function handleReduceQuanty(getID, getQuan) {
    if (getQuan > 0) {
      dispatch({ type: "handlereduceQuanty", productId: getID });
    }
    else {
      dispatch({ type: "removeFromCart", productId: getID });
    }
    // dispatch({type:"reduceQuanty",productId:getID,quantity:quan})
  }

  return (
    <div>
      <Header />
      <h1>CartItems - {totalAmount}</h1>
      <div className="cart-container">
        {product.cartItems.map((items, index) => (
          <div key={index} className="cart-items">
            {/* {setTotalAmount((oldValue)=>oldValue+items.total)} */}
            <div className="cart-image">
              <img
                className="cart-product-image"
                src="https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-black-gallery-1.png?v=1"
                alt="comes here"
              ></img>
            </div>
            <div className="cart-content">
              <h4>{items.tag}</h4>
              <h1>{items.productName}</h1>
              <div>
                <button onClick={() => handleReduceQuanty(items.id, items.quanty)}> reduce </button>
                <span>Quanty - {items.quanty}</span>
                <button onClick={() => handleAddQuanty(items.id)}>add</button>
              </div>
              <button onClick={() => handleRemoveCart(items.id)}>Remove</button>
              <h4 className="product-price">₹ {items.total}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
