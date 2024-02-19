
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import OrderPlace from "./OrderPlace";
import { Link } from "react-router-dom";
import {addItem, removeItem} from "../utils/cartSlice";
import { useState } from "react";


const FullCart = () => {
   
    const cartItems= useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    // const [cc,setCC]=useState([]);
    // setCC(cartItems);

  let price=0;
    cartItems.map((item)=>(
       price+= item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100
    ));
 
    // const [unique,setUnique]=useState([]);
   const unique=[...new Set(cartItems)];
    // setUnique(a);
  return (
   
      
   <div className="flex justify-between">
           <div className="w-5/12">
            <div className="flex items-center justify-between mt-6">
                <h1 className="font-bold text-2xl ml-12">Items - {cartItems.length}</h1>
            <button className="bg-gray-300 text-gray-900  text-lg w-[100px] h-[50px] font-bold rounded-xl hover:bg-gray-200" onClick={handleClearCart}>Clear Cart</button>
            </div>
         
            <ItemList items={unique} />   
        </div>

        <div className="">
            <div className="w-[300px] mt-[200px] mr-[200px]">
            <h1 className="ml-[107px] mb-2 font-semibold">Bill Details</h1>

          <div className="border-t-2 flex justify-between">
          <h1 className="">Item Total</h1>
          <h1>₹ {price}</h1>
          </div>
           
           <div className="flex justify-between">
           <h1>Delivery Fee</h1>
           <h1>₹ 29</h1>
           </div>
           
           <div className="flex justify-between">
           <h1>GST and Restaurant Charges</h1>
           <h1>₹ 49</h1>
           </div>
           
           <div className="border-t-2 mt-3 border-t-black flex justify-between font-bold">
           <h1>Total</h1>
           <h1>₹ {29+49+price}</h1>
           </div>


            </div>
           
           {/* {
             isAuthenticated ?
             <Link to="/final">
             <button className="bg-green-500 text-white rounded-xl my-8 w-[100px] h-[40px] font-semibold  ml-[130px] hover:bg-green-400" > Place order</button>
             </Link>
             :
             <KindlyLog/>
           } */}
           <Link to="/final">
           <button className="bg-green-500 text-white rounded-xl my-8 w-[100px] h-[40px] font-semibold  ml-[130px] hover:bg-green-400 " onClick={handleClearCart} > Place order</button>
           </Link>
           
         

        </div>

       
   </div>
       

  )
}

export default FullCart;