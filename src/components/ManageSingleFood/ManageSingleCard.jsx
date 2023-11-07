import { useEffect, useState } from "react";

const ManageSingleCard = ({ item }) => {
  console.log(item);
  const { requesterImage, status } = item;
  const [change, setChange] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:5000/allFood/patch?change=${
        change ? "Available" : "Delivered"
      }`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [change]);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={requesterImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setChange(!status)}
              className="btn btn-primary"
            >
              {change ? change === status : "Delivered"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleCard;
