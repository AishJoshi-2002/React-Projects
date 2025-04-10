import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
// import App from './App';
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Error from "./Components/Error";

// const appRouter = createBrowserRouter([
//   {
//       path: "/",
//       element: <App/>,
//       errorElement: <Error/>
//   },
//   {
//       path: "/about",
//       element: <About/>
//   },
//   {
//       path: "/contact",
//       element: <Contact/>
//   }
// ])
// React-router DOM gives an error page.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
//   <React.StrictMode>
//     {/* <App /> */}
//   <RouterProvider router={appRouter} /> due to mount unmount and remount
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
