import { Link } from "react-router-dom";

const MyFoodRow = ({ item, handleDelete }) => {
  const { _id, food_name, image, donator_name } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl spy">
      <figure>
        <img className="w-[300px] h-[200px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food Name:{food_name}</h2>
        <p className="card-title">Donator Name:{donator_name}</p>
        <div className="card-actions justify-between mt-3">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-error text-white">Update</button>
          </Link>
        </div>
        <div className="card-actions flex items-center justify-center my-2">
          <Link to={`/manageSingleFood/${_id}`}>
            <button className="btn btn-error w-44 text-white">manage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRow;
