import React from "react";

class UserClass extends React.Component {
    constructor(props){
     super(props);

     this.state={
       userInfo:{
        name:"Dummy",
        location: "Default", 
       }
     }
    }
    

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/agarwalkunal2707");
       const json= await data.json();

       this.setState({
        userInfo:json,
       });

       console.log(json);
    }


    componentDidUpdate(){

    }

    componentWillUnmount(){
      
    }
    
  render() {
    return (
        <div className="user-card">

        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h3>Contact: agarwalkunal2707@gmail.com</h3>
    </div>
    );
  };
};

export default UserClass;
