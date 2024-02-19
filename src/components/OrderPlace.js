
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
   import KindlyLog from "./KindlyLog";
const OrderPlace = () => {
 
    const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();
//  const cartItems= useSelector((store)=>store.cart.items);
//         const dispatch=useDispatch();
//  dispatch(clearCart());
    if(isAuthenticated){
       
       
        
          return (
               
            <div>
                {/* <TiTick className="w-[100px] h-[100px] ml-[700px] mt-[100px] py-4 text-center"/> */}
                <img src="https://media.tenor.com/WsmiS-hUZkEAAAAj/verify.gif" className="w-[100px] h-[100px] mt-[100px] ml-[730px]"></img>
              <h1 className="font-bold text-4xl text-center mt-[8px]">Order Placed Successfully!</h1>
              <Link to="/">
              <button className="bg-orange-500 rounded-lg hover:bg-orange-400 h-[50px] w-[200px] ml-[680px] mt-10 text-white text-lg font-semibold"> Go to restaurants</button>
              </Link>
             
                </div>
          )
    }
    else{
        return (
            <KindlyLog/>
        )
    }

   
}
export default OrderPlace;