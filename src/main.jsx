import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { HomeMenu } from "./Component/Content/HomeMenu";
import { AboutMenu } from "./Component/Content/AboutMenu";
// import { githubInfoLoader, GithubMenu } from "./Component/Content/GithubMenu";
import { GithubMenu } from "./Component/Content/GithubMenu";
import { ContactMenu } from "./Component/Content/ContactMenu";
import { User } from "./Component/SubContent/User";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path:"",
//       element: <HomeMenu />
//     },{
//         path:"about",
//         element: <AboutMenu />
//     },{
//         path:'github',
//         element: <GithubMenu />
//       },{
//         path: 'contact',
//         element: <ContactMenu />
//       }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route 
        path="" 
        element={<HomeMenu />} />
      <Route 
        path="about" 
        element={<AboutMenu />} />
      <Route 
        // loader={githubInfoLoader}  comment coz of cors error in the client side
        path="github" 
        element={<GithubMenu />} />
      <Route 
        path="contact" 
        element={<ContactMenu />} />
      <Route 
        path="user/:userId" 
        element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
