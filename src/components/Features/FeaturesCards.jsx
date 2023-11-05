import {} from "react-router-dom";

const FeaturesCards = ({ items }) => {
  const {
    image,
    food_name,
    expiration_date,
    location,
    additional_notes,
    quantity,
  } = items || {};
  return (
    <div className="card lg:w-[450px] h-[500px] dark:bg-gray-400  bg-base-200 shadow-xl">
      <h2 className="card-title font-bold ml-6 mt-5 dark:text-white">
        {food_name}
      </h2>
      <div className=" mt-10">
        <figure>
          <img className="w-[300px] h-[200px]   " src={image} alt="Shoes" />
        </figure>
      </div>
      <h2 className="card-title font-bold ml-6 mt-5 dark:text-white">
        Quantity:{quantity}
      </h2>
      <h2 className="card-title font-bold ml-6 mt-5 dark:text-white">
        Location:{location}
      </h2>
      <h2 className="card-title font-bold ml-6 mt-5 dark:text-white">
        Date:{expiration_date}
      </h2>
      <h2 className="card-title font-bold ml-6 mt-5 dark:text-white">
        Addition Notes:{additional_notes}
      </h2>
    </div>
  );
};

export default FeaturesCards;
