import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import useLocation1 from "../utils/useLocation";
import useOnline from "../utils/useOnline";
import NumberGuess from "./NumberGuess";
// import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const Body = () => {
  
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const[searchText,setSearchText]=useState("");
    const [location, city] = useLocation1();

    useEffect(() => {
        let loading;
        toast.remove(loading);
        loading = toast.loading("Loading", { duration: 2000 });
        fetchData();
      }, [location]);

      const isOnline = useOnline();

  if (!isOnline) {
    // return <h1>OOPS!! You are offline</h1>;
    return (
      <NumberGuess/>
    )
  }
  const toastId = (e) => {
    let id;
    toast.remove(id);
    id = toast.custom(
      <span className="">
         Sorry, we dont have{" "}
        <span className="">{e.target.value}</span> right now.
      </span>,
      {
        duration: 500,
      }
    );
    return id;
  };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const fetchData = async () => {
    
        const data = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.latitude}&lng=${location?.longitude}`
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.437973605399232&lng=73.86362334666698"
          );
        
            // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6782425&lng=77.3385445");
            const json = await data.json();

            console.log(json);
            // setListofRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants||[]);
            // setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants||[]);

            setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
           setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
       
    };

      console.log(listofRestaurants); 
    console.log(listofRestaurants);  

    if(listofRestaurants.length===0||filteredRestaurant.length===0){
   return <Shimmer/>;
    }
    
    return (
        <div>
            <div className="filter flex justify-center">
                <div className="p-3 flex justify-center my-2">
                    <input type="text" className="p-3 flex space-x-1 w-[500px] rounded-lg m-1 bg-[#fffbfb]" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        const filteredRestaurantlist=listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    
                        if(filteredRestaurantlist.length===0||e.target.value===""){
                           
                              setFilteredRestaurant(listofRestaurants);
                           }
                           else{

                            setFilteredRestaurant(filteredRestaurantlist);
                           }

                           filteredRestaurant.length === 0 ? toastId(e) : null;
                    }}/>

                    <button className="m-1 bg-gray-200 w-12 hover:bg-gray-100 rounded-xl" onClick={()=>{
                        const filteredRestaurantlist=listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    
                           
                        if(filteredRestaurantlist.length===0||searchText===""){
                           
                              setFilteredRestaurant(listofRestaurants);
                           }
                           else{
                            setFilteredRestaurant(filteredRestaurantlist);
                           }
                    }}> <IoIosSearch className=" h-[25px] w-full"/></button>
                </div>

                <button
                    className="m-1 mt-6 ml-11 bg-gray-200 w-96 h-11 hover:bg-gray-100 rounded-xl"
                    onClick={() => {
                        const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4);
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
    
            <div className="flex flex-wrap justify-center">
                
                {filteredRestaurant.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
                ))}
                
            </div>
        </div>
    );
};

export default Body;