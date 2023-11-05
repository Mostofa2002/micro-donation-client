import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";

const Roots = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Roots;
