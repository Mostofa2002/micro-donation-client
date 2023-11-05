import { useLoaderData } from "react-router-dom";
import Features from "../components/Features/Features";
import Banner from "./Banner";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Features data={data} />
    </div>
  );
};

export default Home;
