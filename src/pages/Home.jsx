import { useLoaderData } from "react-router-dom";
import Features from "../components/Features/Features";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Faq from "./Faq";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Micro Donation | Home</title>
      </Helmet>
      <Banner />
      <Features data={data} />
      <Faq />
    </div>
  );
};

export default Home;
