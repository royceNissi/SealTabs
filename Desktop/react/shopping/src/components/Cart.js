import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import { PRODUCTS } from "./Products";
import CartItem from "./CartItem";
export default function Cart(){
    const {cartItems,TotalCartAmount} = useContext(ShopContext);
    let subTotal = TotalCartAmount();
    return(
        <div className="cart">
            <h3>Your Cart</h3>
            <div className="cart-items">          
                {// eslint-disable-next-line
                PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !== 0){
                        return <CartItem key={product.id} product ={product}/>
                    }
                })}
            </div>
            {subTotal>0
            ?<div className="checkout">
            <h4 className="subtotal">SubTotal : ₹ {subTotal}</h4>
            <button className="checkout-button">Checkout</button>
        </div>
            :<h3>Your Cart is Empty</h3>
            }
        </div>
    )
}