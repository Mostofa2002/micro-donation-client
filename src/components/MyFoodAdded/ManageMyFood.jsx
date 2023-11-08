import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import MyFoodRow from "./MyFoodRow";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const { user } = useAuth();
  // console.log(user);
  const url = `https://micro-server-side.vercel.app/Food?email=${user?.email}`;
  const [add, setAdd] = useState([]);
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, [add, url]);
  // console.log(add);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You really want to delete this Food!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://micro-server-side.vercel.app/allFoodS/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
              const remaining = add.filter(() => add._id !== id);
              setAdd(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="block items-center justify-center lg:min-h-screen py-10">
      <Helmet>
        <title> Micro Food | My Food </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold text-lg"></th>

              <th className="font-bold text-lg">Food Details </th>

              <p className="ml-10 font-bold text-lg">
                <th>Donator Details</th>
              </p>
            </tr>
          </thead>
          <tbody>
            {add?.map((item) => (
              <MyFoodRow
                item={item}
                key={item._id}
                handleDelete={handleDelete}
              ></MyFoodRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
