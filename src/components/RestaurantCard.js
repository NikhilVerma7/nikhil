import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
const RestaurantCard=(props)=>{
    // console.log(props);
    const {resData}=props;

    return (

      <div className="m-4 p-4 w-[300px] h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl" >
         {/* <h2>{t} </h2> */}
        <img className="h-[200px] w-full rounded-xl" src={CDN_URL+resData.info.cloudinaryImageId}/>
        <h3 className=" font-bold text-lg py-2">{resData.info.name}</h3>
        <div className="flex items-center	">
        <MdStars/><h4 className="pl-1">{resData.info.avgRatingString} </h4>
        <LuDot/>
        <h4> {resData.info.sla.deliveryTime} minutes</h4>
        </div>
       
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.areaName}</h4>
      </div>

     
    );
  };  


  

  export default RestaurantCard;