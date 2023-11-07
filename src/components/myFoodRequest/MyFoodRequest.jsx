import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodRequestCard from "./MyFoodRequestCard";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const [NewData, setNewData] = useState([]);
  const url = `http://localhost:5000/requests?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }, [url, NewData]);

  return (
    <div>
      {NewData?.map((item) => (
        <MyFoodRequestCard item={item} key={item._id}></MyFoodRequestCard>
      ))}
    </div>
  );
};

export default MyFoodRequest;
