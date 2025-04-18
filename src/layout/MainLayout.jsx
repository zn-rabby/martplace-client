import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className=" bg-white">
      <Nav></Nav>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
