import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { BsFillCartFill, BsFillInfoSquareFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaBowlFood } from "react-icons/fa6";
import useLocation1 from "../utils/useLocation";
import { CiLocationOn } from "react-icons/ci";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Location from "../utils/Location";
import { useAuth0 } from "@auth0/auth0-react";

const Heading = () => {
  const [loc, city] = useLocation1();
  
  return (
    <>
      <a href="/" className="">
        <div className="bg-white-50 flex">
          <img
            data-testid="logo"
            className="h-[80px] mt-4 ml-10 mr-8 "
            src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png"
            alt="logo"
          />
        </div>
      </a>
      <div className="mt-9 mr-[500px] text-xl flex ">
        <CiLocationOn
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            margin: "1px"
            ,
          }}
        />
        {city ? (
          <div className="mb-6 ">
            <span className="font-semibold m-1 ">
              <span className="border-b-2 border-black m-1">{city.city}</span>
              <span className="m-1 ">{city.state},</span>
              <span className="m-1">{city.country}</span>
            </span>
          </div>
        ) : null}
      </div>
    </>
  );  
};

const Header=()=>{

  const [btnNameReact,setBtnNameReact]= useState("Login");
  
  const online =useOnline();
  const location = useContext(Location);
const cartItems=useSelector((store)=>store.cart.items);

const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();


    return (

      <div className="flex justify-between items-center bg-[#FFFCFD] shadow-lg h-[110px]">
         <Heading/>
        {/* <div className="logo">
        <img className="w-24 ml-10 mt-2"src={LOGO_URL}/>
        </div> */}
  
        <div className="flex justify-around items-center w-[830px]">
         <ul className="flex p-4 m-4 items-center">
          <li className="px-4 font-medium text-lg">
            Online: {online?"✅":"🔴"}
          </li>
          
      

          <li className="px-4 font-medium text-lg hover:text-orange-500"><Link to="/">Home</Link></li>        
          <li className="px-4 font-medium text-lg hover:text-orange-500"> <Link to="/about">About</Link></li>
          {/* <li className="px-4 font-medium text-lg hover:text-orange-500"> <Link to="/contact">Contact Us</Link></li> */}
           

      <Link to="/cart">
      <div className="flex items-center px-4 hover:text-orange-500">
           <div className="relative">
    <BsCartFill className="w-[36px] h-[28px] "/>
    <h1 className="text-white font-bold absolute top-0 left-3 z-10">
        {cartItems.length}
    </h1>
</div>
          
          <li className="ml-2 font-medium text-lg "><Link to="/cart">Cart</Link></li>
           </div>
      </Link>


          
       {
        isAuthenticated ?
        <div className="">
          {/* <h1>{user.name}</h1> */}
          <img src={user.picture} alt={user.name} className="w-[40px] h-[40px] rounded-full ml-6 text-white font-bold bg-black" />
               <button className="px-4 font-medium text-lg hover:text-orange-500" 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
        </div>
        

        :
        <button className=" px-4 font-medium text-lg hover:text-orange-500" onClick={() => loginWithRedirect()}>Login</button>
       }   
            

{/* <button className=" px-4 font-medium text-lg hover:text-orange-500" onClick={() => loginWithRedirect()}>Login</button>

    <button className="px-4 font-medium text-lg hover:text-orange-500" 
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> */}


         </ul>
        </div>
      </div>
    )
  };

  export default Header;

  