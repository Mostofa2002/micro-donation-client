import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import ManageSingleCard from "./ManageSingleCard";
import { Helmet } from "react-helmet-async";

const ManageSingleFood = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://micro-server-side.vercel.app/request/${id}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [user, id]);
  console.log(data);

  return (
    <div className="flex justify-center gap-4">
      <Helmet>
        <title> Micro Food | My Single Food </title>
      </Helmet>
      {data.map((item) => (
        <ManageSingleCard key={item._id} item={item}></ManageSingleCard>
      ))}
    </div>
  );
};

export default ManageSingleFood;
