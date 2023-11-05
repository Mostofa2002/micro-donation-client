import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";

const Roots = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
