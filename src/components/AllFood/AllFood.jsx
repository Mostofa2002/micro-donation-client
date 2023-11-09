import { Link } from "react-router-dom";

const AllFood = ({ items }) => {
  const {
    status,
    _id,
    image,
    food_name,
    expiration_date,
    location,
    additional_notes,
    quantity,
    donator_name,
    donator_image,
  } = items || {};
  return (
    <div className="card lg:w-[500px] lg:h-[750px] dark:bg-gray-400  bg-base-200 shadow-xl ">
      <h2 className="card-title foot-medium ml-6 mt-5 dark:text-white">
        {food_name}
      </h2>
      <div className=" mt-10">
        <figure>
          <img className="w-[300px] h-[200px]   " src={image} alt="Shoes" />
        </figure>
      </div>
      <h2 className="card-title foot-medium ml-6 mt-5 dark:text-white">
        Quantity:{quantity}
      </h2>
      <h2 className="card-title foot-medium ml-6 mt-5 dark:text-white">
        Location:{location}
      </h2>
      <h2 className="card-title foot-medium ml-6 mt-5 dark:text-white">
        Date:{expiration_date}
      </h2>
      <h2 className="card-title foot-medium ml-6 mt-5 dark:text-white">
        Addition Notes:{additional_notes}
      </h2>
      <h2 className="card-title foot-medium ml-6 mt-5 dark:text-white">
        Status: {status}
      </h2>
      <hr className="bg-gray-300 mt-1 w-96 ml-6 " />
      <h2 className="card-title foot-medium ml-6 mt-1 dark:text-white">
        Donator Details:
      </h2>

      <div className=" card-title flex items-center ml-6 mt-5 ">
        <img
          className="w-[50px] h-12 rounded-full"
          src={donator_image}
          alt=""
        />
        <p className="text-2xl font-bold">{donator_name}</p>
      </div>
      <div className="flex  justify-center mt-10">
        <Link to={`/singleFood/${_id}`}>
          <button className="btn btn-neutral w-80 "> See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AllFood;
