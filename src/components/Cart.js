import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";




const Cart = () => {
    const cartItems= useSelector((store)=>store.cart.items);
  
  return (
    
             cartItems.length===0 ?<EmptyCart/>:<FullCart/>
       
  )
}

export default Cart;