import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import OrderPlace from "./components/OrderPlace";
import Login from "./components/Login";
import { Auth0Provider } from '@auth0/auth0-react';
const AppLayout=()=>{
  return (
    <Auth0Provider
    domain="dev-m6v6dos4lfkzv8wz.us.auth0.com"
    clientId="grEsIa2uCekZGfaaf7CAqbqVbZnjQaam"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<Provider store={appStore}>
         <div className="app ">
     <Header/>
     <Outlet/>
    
    </div>
    </Provider>
  </Auth0Provider>
    
   
  )
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/final",
        element:<OrderPlace/>
      },
      {
        path:"/login",
        element:<Login/>
      }

    ],
    errorElement:<Error/>
  },
 
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

