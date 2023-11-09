const MyFoodRequestCard = ({ item, handleDelete }) => {
  const { donator_name, donation, requestTimes, status, location, _id } = item;
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl h-[300px]">
        <div className="card-body">
          <h2 className="card-title">Donator Name: {donator_name}</h2>
          <h2 className="card-title">My Donation: {donation}$</h2>
          <h2 className="card-title">Request Data: {requestTimes}</h2>
          <h2 className="card-title">Location: {location}</h2>
          <h2 className="card-title">Status: {status}</h2>
          <div className="card-actions justify-end">
            {status === "Available" ? (
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-neutral text-white"
              >
                Cancel
              </button>
            ) : (
              <h3 className="text-lg font-bold">Delivered</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequestCard;
