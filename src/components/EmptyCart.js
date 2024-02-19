
import { Link } from "react-router-dom"; 
const EmptyCart = () => {
  return (
    <div>
        <h1 className="font-bold text-orange-400 text-4xl text-center mt-6">Cart is EMPTY!!!</h1>
        <img src="https://namastefood.vercel.app/CartEmpty.522f5c60.png" className="w-[500px] h-[400px] text-center ml-[510px]"></img>
        <h1 className="font-bold text-4xl text-center">You can go to <Link to="/" className="text-orange-400">Home Page</Link> to view more restaurants.</h1>
    </div>
  )
}
export default EmptyCart;