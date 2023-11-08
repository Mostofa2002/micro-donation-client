// import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";

import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  //   const { user } = useAuth();
  //   console.log(user);
  //   const [time, setTime] = useState(null);
  const {
    image,
    food_name,
    expiration_date,
    quantity,
    _id,
    additional_notes,
    location,
  } = data || {};
  console.log(data);

  //   useEffect(() => {
  //     const now = new Date();
  //     const formattedDate = now.toLocaleDateString();
  //     setTime(formattedDate);
  //   }, [time]);

  const HandelAddProduct = (event) => {
    event.preventDefault();
    const from = event.target;

    const food_name = from.food_name.value;
    const additional_notes = from.additional_notes.value;
    const location = from.location.value;
    const image = from.image.value;
    const quantity = parseFloat(from.quantity.value);
    const expiration_date = from.expiration_date.value;
    const status = from.status.value;

    const addUpdate =
      {
        status,
        quantity,
        food_name,
        additional_notes,
        location,
        image,
        expiration_date,
      } || {};
    console.log(addUpdate);

    // form to database
    fetch(` https://micro-server-side.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "SuccessFull",
            text: "Update successfully",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="mt-8 container mx-auto py-10">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-green-600 rounded-xl shadow-2xl  lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-white">
            Add Some Food To Help Other
          </h1>

          <form onSubmit={HandelAddProduct} className="mt-6">
            <div className="flex gap-1">
              {/* product name */}
              <div className="flex-1 form-control ">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Food Name
                </label>
                <input
                  defaultValue={food_name}
                  name="food_name"
                  type="text"
                  placeholder="Enter Food Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* choose the brand */}
              <div className="flex-1  form-control ">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Food Quantity
                </label>
                <input
                  defaultValue={quantity}
                  name="quantity"
                  type="text"
                  list="Brand"
                  placeholder="Select Quantity"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="Brand"></datalist>
              </div>
            </div>
            <div className="flex gap-1">
              {/* Product Type */}
              <div className="flex-1 form-control 5">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Expired Date
                </label>
                <input
                  defaultValue={expiration_date}
                  name="expiration_date"
                  type="text"
                  placeholder="Select Expiration_date"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="Product"></datalist>
              </div>
              {/* Product price */}
              <div className="flex-1  form-control ">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Additional Notes
                </label>
                <input
                  defaultValue={additional_notes}
                  name="additional_notes"
                  type="text"
                  placeholder="Enter Additional Notes"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex gap-1">
              {/* description */}
              <div className="flex-1 form-control ">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Pickup Location
                </label>
                <input
                  defaultValue={location}
                  name="location"
                  type="text"
                  placeholder="Enter Location Of Food"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* rating */}
              <div className=" form-control flex-1">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Food Status
                </label>
                <input
                  defaultValue={"Available"}
                  name="status"
                  type="text"
                  placeholder="status"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            {/* photo url */}
            <div className="flex-1 form-control">
              <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                Food Image
              </label>
              <input
                defaultValue={image}
                name="image"
                type="text"
                placeholder="Enter Product Image URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex lg:flex-row-reverse flex-col-reverse justify-center lg:gap-10">
              <input
                className=" px-6 py-3 mt-6 text-lg font-bold hover:bg-black text-white btn bg-green-500"
                type="submit"
                value="Update Food "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
