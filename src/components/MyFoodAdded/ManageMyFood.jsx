import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import MyFoodRow from "./MyFoodRow";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCart = () => {
  const { user } = useAuth();
  // console.log(user);
  const axiosSecure = useAxiosSecure();

  const [add, setAdd] = useState([]);

  // const url = `https://micro-server-side.vercel.app/Food?email=${user?.email}`;

  const url = `Food?email=${user?.email}`;

  useEffect(() => {
    // fetch(url, { credentials: "include" })
    //   .then((res) => res.json())
    //   .then((data) => setAdd(data));

    axiosSecure.get(url).then((res) => setAdd(res.data));
  }, [axiosSecure, url]);

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
              <th className="font-bold text-lg">Delete</th>
              <th className="font-bold text-lg">Food Photo </th>
              <th className="font-bold text-lg">Donator Details</th>
              <th className="font-bold text-lg">Management </th>
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
