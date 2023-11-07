import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";

const SingleFood = () => {
  const data = useLoaderData();
  const btn = useRef();
  const { user } = useAuth();
  console.log(user);

  const {
    image,
    food_name,
    expiration_date,
    quantity,
    _id,
    donator_name,
    additional_notes,
    location,
    donatorEmail,
  } = data || {};
  console.log(data);

  const [time, setTime] = useState(null);

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    setTime(formattedDate);
  }, [time]);

  const HandelAddProduct = (event) => {
    event.preventDefault();

    const from = event.target;
    const requestTimes = from.times.value;
    const name = from.name.value;
    const additional_notes = from.additional_notes.value;
    const donation = from.donation.value;
    const location = from.location.value;
    const donator_name = from.donator_name.value;
    const image = from.image.value;
    const expiration_date = from.expiration_date.value;
    const foodId = from.foodId.value;
    const donatorEmail = from.donatorEmail.value;

    const addRequest =
      {
        requesterName: user?.displayName,
        requesterImage: user?.photoURL,
        requestTimes,
        requesterEmail: user?.email,
        status: data?.status,
        donatorEmail,
        name,
        additional_notes,
        donation,
        location,
        donator_name,
        image,
        expiration_date,
        foodId,
      } || {};
    console.log(addRequest);

    // form to database
    fetch("http://localhost:5000/request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          btn.current.click();
          Swal.fire({
            icon: "success",
            title: "SuccessFull",
            text: "Product added successfully",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="flex justify-center items-center py-20">
      <div className="card lg:w-[450px] h-[570px] dark:bg-gray-400  bg-base-100 shadow-xl  ">
        <h2 className="card-title foot-medium ml-3 mt-1 dark:text-white">
          Donator Details
        </h2>
        <p className="text-2xl font-bold ml-3">Donator Name: {donator_name}</p>
        <p className="text-2xl font-bold ml-3">Location: {location}</p>
        <hr className="bg-gray-300 mt-1 w-96 ml-6 " />

        <div className=" mt-10">
          <figure>
            <img className="w-[300px] h-[200px] " src={image} alt="Shoes" />
          </figure>
        </div>
        <h2 className="card-title foot-medium ml-3  mt-3 dark:text-white">
          Food Name: {food_name}
        </h2>
        <h2 className="card-title foot-medium ml-3 mt-3 dark:text-white">
          Quantity: {quantity}
        </h2>

        <h2 className="card-title foot-medium ml-3 mt-3 dark:text-white">
          Date: {expiration_date}
        </h2>

        <div className="flex  justify-center mt-10">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-neutral w-80 "
          >
            Request button{" "}
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={HandelAddProduct} className="mt-6">
                <div className="flex items-center gap-1">
                  <p className="text-xl">Food</p>
                  <input
                    disabled
                    defaultValue={food_name}
                    name="name"
                    type="text"
                    placeholder="Enter Product Name"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Food Image</p>
                  <input
                    disabled
                    defaultValue={image}
                    name="image"
                    type="text"
                    placeholder="Enter Product Name"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Food Id</p>
                  <input
                    disabled
                    defaultValue={_id}
                    name="foodId"
                    type="text"
                    placeholder="Enter Product Name"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Donator Name</p>
                  <input
                    defaultValue={donator_name}
                    name="donator_name"
                    type="text"
                    placeholder="Enter Product Name"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-xl">Donator Name</p>
                  <input
                    defaultValue={donatorEmail}
                    name="donatorEmail"
                    type="text"
                    placeholder="Enter Product Name"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Request Time</p>
                  <input
                    disabled
                    defaultValue={time}
                    name="times"
                    type="text"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Location</p>
                  <input
                    disabled
                    defaultValue={location}
                    name="location"
                    type="text"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Expire Date</p>
                  <input
                    disabled
                    defaultValue={expiration_date}
                    name="expiration_date"
                    type="text"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl"> Additional Notes</p>
                  <input
                    defaultValue={additional_notes}
                    name="additional_notes"
                    type="text"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-xl">Donation</p>
                  <input
                    name="donation"
                    type="text"
                    className="block w-1/2 px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="w-1/2 mx-auto">
                  <input
                    className=" px-6 py-3 mt-6 text-lg font-bold hover:bg-black text-white btn bg-green-500"
                    type="submit"
                    value="Add Request"
                  />
                </div>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button ref={btn} className="btn">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
