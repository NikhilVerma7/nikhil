import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return (
        <div className="flex items-center justify-center mt-6 text-lg font-bold">
            {/* <User name={"Kunal Agarwal"}/> */}
           <UserClass name={"Kunal Agarwal"}/>
        </div>
    )
}
export default About;