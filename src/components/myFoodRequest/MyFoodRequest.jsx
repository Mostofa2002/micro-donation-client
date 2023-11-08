import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodRequestCard from "./MyFoodRequestCard";
import Swal from "sweetalert2";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const [NewData, setNewData] = useState([]);
  const url = `https://micro-server-side.vercel.app/requests?email=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }, [url, NewData]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are really sure, you want to cancel this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://micro-server-side.vercel.app/request/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your food has been cancel.", "success");
              const remaining = NewData.filter(() => NewData._id !== id);
              setNewData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      {NewData?.map((item) => (
        <MyFoodRequestCard
          item={item}
          key={item._id}
          handleDelete={handleDelete}
        ></MyFoodRequestCard>
      ))}
    </div>
  );
};

export default MyFoodRequest;
