import { useContext } from "react";
import { ShopContext } from "./ShopContext";
export default function ProductCard(props){
    const {addToCart,cartItems} = useContext(ShopContext);
    let cartItemAmount = cartItems[props.product.id];
    return(
        <div  className="product-card">
            <div className="product">
                <img src={props.product.productImageURL} alt="something" className="product-image"/>
                <h5 className="product-name">{props.product.productName}</h5>
            </div>
            <div className="product-details">
                <p className="product-description">{props.product.description}</p>
                <h6 className="product-price">₹ {props.product.price}</h6>
                <button className='add-product' onClick={()=>addToCart((props.product.id))}>
                    ADD TO CART{cartItemAmount>0?<span>({cartItemAmount})</span>:null}
                </button>
            </div>
        </div>
    )
}