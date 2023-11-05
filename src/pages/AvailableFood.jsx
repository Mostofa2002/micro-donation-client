import { useLoaderData } from "react-router-dom";
import AllFood from "../components/AllFood/AllFood";

const AvailableFood = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="py-20">
      <h1 className="text-center text-5xl font-bold dark:text-white mt-10">
        Available Food Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:mx-48 py-10 ">
        {data?.map((items) => (
          <AllFood key={items.id} items={items}></AllFood>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
