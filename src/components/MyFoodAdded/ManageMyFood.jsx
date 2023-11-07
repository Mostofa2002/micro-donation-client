import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import MyFoodRow from "./MyFoodRow";
import useAuth from "../../hooks/useAuth";

const MyCart = () => {
  const { user } = useAuth();
  // console.log(user);
  const url = ` http://localhost:5000/Food?email=${user?.email}`;
  const [add, setAdd] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, [add, url]);
  // console.log(add);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` http://localhost:5000/allFoodS/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = add.filter(() => add._id !== id);
              setAdd(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="flex items-center justify-center lg:min-h-screen py-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:mx-48 py-10 ">
        {add?.map((item) => (
          <MyFoodRow
            key={add._id}
            item={item}
            handleDelete={handleDelete}
          ></MyFoodRow>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
