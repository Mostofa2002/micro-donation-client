const ManageSingleCard = ({ item }) => {
  const {
    requesterImage,
    requesterEmail,
    requestTimes,
    requesterName,
    status,
  } = item;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-full h-[300px]" src={requesterImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Requester Name: {requesterName}</h2>
          <h2 className="card-title">Requester Email: {requesterEmail}</h2>
          <h2 className="card-title">Requester Time: {requestTimes}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> Status: {status}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleCard;
