import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";

const App = () => {
    return (
        <div className="app">
            <Header/>
            {/* whenever there will be a change in the path, the Outlet component will be filled with the children. */}
            <Outlet/>
            <Footer/>
        </div>
    )
}

// Children routes: for header, but only the body content changes.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // :resId means it will be dynamic
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

export default App;
export { appRouter };