import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturesCards = ({ items }) => {
  const {
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="card lg:w-[450px] h-[700px] dark:bg-gray-400  bg-base-100 shadow-xl"
    >
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
    </motion.div>
  );
};

export default FeaturesCards;
