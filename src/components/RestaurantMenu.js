import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
const RestaurantMenu = () => {


const {resId} =useParams();
   const resInfo= useRestaurantMenu(resId);

   const [showIndex,setShowIndex]= useState(0);
  
 if(resInfo.length===0)
 return <Shimmer/>
 const{name,cuisines,costForTwoMessage,areaName,cloudinaryImageId,totalRatingsString,avgRatingString,sla}=resInfo?.cards[2]?.card?.card?.info||[];

 const itemCards=resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards||
 resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel||[];
 console.log(resInfo);  
//  console.log(itemCards); 
 
const categories=resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>
  c?.card?.card?.["@type"].includes("ItemCategory")
)||[];

console.log(cuisines);
console.log(name);

  return  (
    <div className="text-center">
        {/* <h1 className="font-bold m-6 text-2xl ">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p> */}

 <div className="flex justify-between items-center w-8/12 mx-auto">
        <div>
        <h1 className="font-bold mt-6 text-3xl mb-3 font-sans  ">{name}</h1>
      <p className="font-thin border-b-2">{cuisines.length===0? "" :  cuisines.join(", ")} </p>
      <h1 className="font-thin border-b-2 ">{areaName} - {sla.deliveryTime} minutes</h1>
      <h1 className="font-thin border-b-2 ">{costForTwoMessage}</h1>
      <div className="flex items-center mt-3 ml-3">
      <MdStars/>
      <h1 className="ml-1"> {avgRatingString} </h1>
      <LuDot/>
        <h1>  {totalRatingsString} </h1>
      </div>
      
     </div>

   
  <div>
    <img src={CDN_URL+cloudinaryImageId} className="w-[250px] h-[250px] mt-4 mr-3 rounded-xl shadow-xl hover:shadow-inner"/>
  </div>
 </div>
    

       {/* accordian  */}
         {categories.map((category,index)=>( 
         <RestaurantCategory key={index} data={category?.card?.card} resimg={cloudinaryImageId}
        //  showItems={index===showIndex?true:false}
        //  setShowIndex={()=>setShowIndex(index)}
         />
         ))}

    </div>
  );
};

export default RestaurantMenu;


