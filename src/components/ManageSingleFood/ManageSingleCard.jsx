import Swal from "sweetalert2";
const ManageSingleCard = ({ item, handleUpdate }) => {
  const {
    requesterImage,
    requesterEmail,
    requestTimes,
    requesterName,
    status,
    _id,
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
            {status === "Delivered" ? (
              <h3 className="text-lg font-bold">Delivered</h3>
            ) : (
              <button
                onClick={() => handleUpdate(_id)}
                className="btn btn-success text-white"
              >
                Delivery
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleCard;
