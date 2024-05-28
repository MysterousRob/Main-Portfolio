import React from 'react';import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './Pages/Home';

import AboutMe from './Pages/about me/AboutMe';
import PrevWork from './Pages/PrevWork';
import Contact from './Pages/Contact';
import Templates from './Pages/Templates';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  //home nav
  {
   path: "/", 
   element: <App />,
  },
  {
   path: "/About", 
   element: <AboutMe />,
  },
  {
   path: "/Prev", 
   element: <PrevWork />,
  },
  {
   path: "/Contact", 
   element: <Contact />,
  },
  {
   path: "/Templates", 
   element: <Templates />,
  },
  //footer router
   {
     path: "", 
     element: "",
   },
 ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

