import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import ManageSingleCard from "./ManageSingleCard";

const ManageSingleFood = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/request/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [user, id]);
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <ManageSingleCard key={item._id} item={item}></ManageSingleCard>
      ))}
    </div>
  );
};

export default ManageSingleFood;
