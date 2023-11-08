const MyFoodRequestCard = ({ item, handleDelete }) => {
  const { donator_name, donation, requestTimes, status, location, _id } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Donator Name:{donator_name}</h2>
          <h2 className="card-title">My Donation:{donation}$</h2>
          <h2 className="card-title">Request Data:{requestTimes}</h2>
          <h2 className="card-title">Location:{location}</h2>
          <h2 className="card-title">Status:{status}</h2>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequestCard;
