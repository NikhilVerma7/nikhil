import { useDispatch ,useSelector} from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem, removeItem,addsingle,removesingle} from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({items,resimg}) => {
    console.log(items);
    const cartItems= useSelector((store)=>store.cart.items);
    const freq=useSelector((store)=>store.cart.fre);
    // const[fre,setFre]= useState({});
   
     const dispatch= useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
        dispatch(addsingle(item?.card?.info?.id));
      //   const frequency = fre;
      //      if (frequency[item?.card?.info?.id]) {
      //   frequency[item?.card?.info?.id]++;
      // } else {
      //   frequency[item?.card?.info?.id] = 1;
      // }
      // setFre(frequency);
    }
    const handleSubtractItem=(item)=>{
      dispatch(removeItem(item));
      dispatch(removesingle(item?.card?.info?.id));
      // const frequency = fre;
      // frequency[item?.card?.info?.id]--;
      // setFre(frequency);
  }
 

  return (
    <div>
    {items.map((item)=>(
        <div className="flex justify-between items-center h-[200px] border-b-2">  
              <div key={item?.card?.info?.id} className="p-2 m-2  border-gray-200  text-left"> 
        
            <div className="py-2">
                <img src={ item?.card?.info?.itemAttribute?.vegClassifier==="NONVEG" ?
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png":
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/180px-Veg_symbol.svg.png?20131205102827"}
                 className="w-6 h=6 mb-2"/>

               <span className="font-bold ">{item?.card?.info?.name}</span>  
               <h2 className="font-medium"> ₹{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100}</h2>
                </div>

                <p className="text-xs font-mono mb-4 w-[700px]">{item?.card?.info?.description||item?.card?.info?.category}</p>
    </div>
       <div className="mr-4 mt-4 ">
      
       <img src={CDN_URL+item?.card?.info?.imageId?CDN_URL+item?.card?.info?.imageId:CDN_URL+resimg}  className="w-[150px] h-[100px] rounded-xl mr-4 "/>
    
         <div className="flex items-center ml-8 mt-2">
  <button 
    className="px-2 bg-white shadow-lg rounded-xl text-green-900 font-bold text-2xl cursor-pointer hover:bg-gray-100"
    onClick={() => handleSubtractItem(item)}
  >
    -
  </button>
  <h1 className="mx-4 font-semibold">{freq[item?.card?.info?.id]||0}</h1>
  <button 
    className="px-2 bg-white shadow-lg rounded-xl text-green-900 text-xl font-bold cursor-pointer hover:bg-gray-100"
    onClick={() => handleAddItem(item)}
  >
    +
  </button>
</div>


        </div>

 
        </div>
         
    ))}
    </div>
  )
}

export default ItemList;