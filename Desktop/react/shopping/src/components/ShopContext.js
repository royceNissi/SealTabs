import { createContext, useState } from "react";
import {PRODUCTS} from './Products'
export const ShopContext = createContext(null);
function getDefaultCart(){
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0
    }
    return cart
}
export default function ShopContextProvider(props){
    const[cartItems,setCartItems] = useState(getDefaultCart());
    function addToCart(itemID){
        setCartItems((p)=>({...p,[itemID]:p[itemID]+1}))
    }
    function removeFromCart(itemID){
        setCartItems((p)=>({...p,[itemID]:p[itemID]-1}))
    }
    function updateCartItemCount(newAmount,itemID){
        setCartItems((p)=>({...p,[itemID]:newAmount}))
    }
    function remove(itemID){
        setCartItems((p)=>({...p,[itemID]:0}))
    }
    function TotalCartAmount(){
        let subTotal = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let product = PRODUCTS.find((p)=>p.id === Number(item));
                subTotal+= product.price * cartItems[item];
            }
        }
        return subTotal;
    }
    const contextvalue ={cartItems,addToCart,removeFromCart,updateCartItemCount,remove,TotalCartAmount}
    return <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
}