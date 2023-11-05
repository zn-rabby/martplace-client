import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Mainlayout";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Home from "../page/Home/Home";
import Error from "../components/Error/Error";
import AddJobs from "../page/AddJobs/AddJobs";
import PostedJobs from "../page/PostedJobs/PostedJobs";
import Bids from "../page/Bids/Bids";
import BidRequests from "../page/BidRequests/BidRequests";
// import AddProduct from "../page/AddProduct/AddProduct";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import Brand from "../page/Brand/Brand";
// import MyCart from "../page/MyCart/MyCart";
// import Update from "../page/Update/Update";
// import Details from "../page/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addJob",
        element: <AddJobs></AddJobs>,
      },
      {
        path: "/postedJobs",
        element: <PostedJobs></PostedJobs>,
      },
      {
        path: "/bids",
        element: <Bids></Bids>,
      },
      {
        path: "/bidRequests",
        element: <BidRequests></BidRequests>,
      },
      // {
      //   path: "/brand/:brand_name",
      //   element: <Brand></Brand>,
      //   loader: () => fetch("/brand.json"),
      // },
      // {
      //   path: "/products/:id",
      //   element: <Update></Update>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://digital-store-server-940h97fnc-rabby-webs-projects.vercel.app/products/${params.id}`
      //     ),
      // },
      // {
      //   path: "/details/:id",
      //   element: (
      //     <PrivateRoute>
      //       <Details></Details>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://digital-store-server-940h97fnc-rabby-webs-projects.vercel.app/products/${params.id}`
      //     ),
      // },
      // {
      //   path: "/myCart",
      //   element: (
      //     <PrivateRoute>
      //       <MyCart></MyCart>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/addProduct",
      //   element: (
      //     <PrivateRoute>
      //       <AddProduct></AddProduct>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
