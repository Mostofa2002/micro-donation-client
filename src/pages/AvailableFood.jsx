import { useLoaderData } from "react-router-dom";

const AvailableFood = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>here available food</div>;
};

export default AvailableFood;
