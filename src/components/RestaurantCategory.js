import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import ItemList from "./ItemList";
  
import { useState } from "react";



const RestaurantCategory=({data,resimg})=>{
    const [showItems,setShowItems]= useState(false);
    const handleclick=()=>{
        showItems===true?setShowItems(false):setShowItems(true);
   }
    // console.log(data);
  
    const list=data?.itemCards||data?.categories[0]?.itemCards;
//    console.log(list);
    return (
        <div>
               <div className="w-8/12 mx-auto my-4  bg-white shadow-lg p=4 ">
                   <div className="flex justify-between items-center cursor-pointer h-[60px]" onClick={handleclick}>
                   <span className="ml-2 font-bold text-lg">{data.title} ({list.length})</span>
                       <h2 className="mr-2 text-xl">{ showItems===true?<FaAngleUp/>:<FaAngleDown/>}</h2>
                   </div>
                    
                    {/* <ItemList items={list}/> */}
                  {showItems&&<ItemList items ={list} resimg={resimg}/>}


            </div>
  
        </div>
       
    );
};

export default RestaurantCategory;