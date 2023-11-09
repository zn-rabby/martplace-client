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
import JobsDetails from "../page/JobsDetails/JobsDetails";
import Update from "../page/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobsDetails></JobsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/postedJobs",
        element: (
          <PrivateRoute>
            <PostedJobs></PostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/update/:id",
        element: (
          <Update>
            <Update></Update>
          </Update>
        ),
      },
      {
        path: "/bids",
        element: (
          <PrivateRoute>
            <Bids></Bids>
          </PrivateRoute>
        ),
      },
      {
        path: "/bidRequests",
        element: <BidRequests></BidRequests>,
        loader: () => fetch("https://martplace-server.vercel.app/bids"),
      },
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
