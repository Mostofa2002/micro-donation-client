import { useLoaderData } from "react-router-dom";
import Features from "../components/Features/Features";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Faq from "./Faq";
import About from "./About";
import { motion } from "framer-motion";

const Home = () => {
  const data = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Helmet>
        <title>Micro Donation | Home</title>
      </Helmet>
      <Banner />
      <Features data={data} />
      <About />
      <Faq />
    </motion.div>
  );
};

export default Home;
