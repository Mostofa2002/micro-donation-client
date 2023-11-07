const MyFoodRequestCard = ({ item }) => {
  const { donator_name, donation, expiration_date, status, location } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Donator Name:{donator_name}</h2>
          <h2 className="card-title">My Donation:{donation}$</h2>
          <h2 className="card-title">Expire Data:{expiration_date}</h2>
          <h2 className="card-title">Location:{location}</h2>
          <h2 className="card-title">Status:{status}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Cancel </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequestCard;
