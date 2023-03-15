import { ShopContext } from "./ShopContext";
import { useContext } from "react";
export default function CartItem(props){
    const {cartItems,addToCart,removeFromCart,updateCartItemCount,remove} = useContext(ShopContext);
    return(
        <div  className="cart-product-card">
            <div className="product">
                <img src={props.product.productImageURL} alt="something" className="product-image"/>
                <h5 className="product-name">{props.product.productName}</h5>
            </div>
            <div className="product-details">
                <h6 className="product-price">₹ {props.product.price}</h6>
                <div className="quantity-buttons">
                    <button className="decrease-button"
                    onClick={()=>removeFromCart(props.product.id)}>-</button>
                    <input className="quantity" value={cartItems[props.product.id]} 
                    onChange={(e)=>updateCartItemCount(Number(e.target.value),props.product.id)}/>
                    <button className="increase-button"
                    onClick={()=>addToCart(props.product.id)}>+</button>
                </div>
                <button onClick={()=>remove(props.product.id)}>Delete</button>
            </div>
        </div>
    )
}