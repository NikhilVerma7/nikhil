import { useState,useEffect } from "react";

const User = (props) => {
  const [count]=useState(0);
  const [count1]=useState(1);
  return (
    <div className="user-card">
       <h2>Count: {count}</h2>  
          <h2>Count: {count1}</h2>  
        <h2>Name: {props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: agarwalkunal2707@gmail.com</h4>
    </div>
  );
};
export default User;