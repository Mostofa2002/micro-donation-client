import { Link } from "react-router-dom";
import FeaturesCards from "./FeaturesCards";

const Features = ({ data }) => {
  console.log(data);
  return (
    <div className="py-20">
      <h1 className="text-center text-5xl font-bold dark:text-white mt-10">
        Featured Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:mx-48 py-10 ">
        {data?.map((items) => (
          <FeaturesCards key={items.id} items={items}></FeaturesCards>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/availableFood">
          <button className="btn btn-neutral"> Show All Food</button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
