import { useEffect, useState } from "react";

const ManageSingleCard = ({ item }) => {
  const {
    requesterImage,
    status,
    requesterEmail,
    requestTimes,
    requesterName,
  } = item;
  const [change, setChange] = useState(true);

  return (
    <div>
      <div className="card   bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={requesterImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Requester Name:{requesterName}</h2>
          <h2 className="card-title">Requester Email:{requesterEmail}</h2>
          <h2 className="card-title">Requester Time:{requestTimes}</h2>

          <div className="card-actions justify-end">
            <button
              onClick={() => setChange(!status)}
              className="btn btn-primary"
            >
              {change ? change == status : "Delivered"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleCard;
