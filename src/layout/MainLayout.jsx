import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-slate-900 bg-white">
      <Nav></Nav>
      <div className="container mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
