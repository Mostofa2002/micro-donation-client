import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ManageSingleCard from "./ManageSingleCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
  const [data, setData] = useState([]);
  const secure = useAxiosSecure();

  const { id } = useParams();
  const url = `request/${id}`;

  useEffect(() => {
    secure.get(url).then((res) => setData(res.data));
  }, [id, url, secure]);
  console.log(data);

  const handleUpdate = (id) => {
    const url = `https://micro-server-side.vercel.app/updated/${id}`;
    console.log(url);
    fetch(url, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Delivered" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "SuccessFull",
            text: "Update successfully",
            confirmButtonText: "Ok",
          });
          const remaining = data.filter(() => data._id !== id);
          const updated = data.find(() => data._id === id);
          updated.status = "Delivered";
          const NewData = [updated, ...remaining];
          setData(NewData);
        }
      });
  };
  return (
    <div className="flex justify-center gap-4">
      <Helmet>
        <title> Micro Food | My Single Food </title>
      </Helmet>
      {data.map((item) => (
        <ManageSingleCard
          key={item._id}
          item={item}
          handleUpdate={handleUpdate}
        ></ManageSingleCard>
      ))}
    </div>
  );
};

export default ManageSingleFood;
