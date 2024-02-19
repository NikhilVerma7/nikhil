import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const KindlyLog = () => {
    const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();
  return (
    <div>
        
        <h1 className="font-bold text-4xl text-center mt-6">Kindly <button className="text-orange-400" onClick={() => loginWithRedirect()}>Log in</button> to place the order</h1>
        
    </div>
  )
}

export default KindlyLog;