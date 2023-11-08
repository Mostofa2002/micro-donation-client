import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";
import { motion } from "framer-motion";

const Roots = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer />
    </motion.div>
  );
};

export default Roots;
