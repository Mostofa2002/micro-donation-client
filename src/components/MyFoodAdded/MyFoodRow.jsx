import { Link } from "react-router-dom";

const MyFoodRow = ({ item, handleDelete }) => {
  const { _id, food_name, image, donator_name, expiration_date } = item;
  // console.log(item);
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline"
        >
          <i className="fa-regular lg:text-xl fa-trash-can"></i>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{food_name}</div>
          </div>
        </div>
      </td>

      <td>
        <span className="badge badge-ghost badge-sm">{donator_name}</span>

        <span className="badge badge-ghost badge-sm">
          Expire Date:{expiration_date}
        </span>
      </td>
      <Link to={`/update/${_id}`}>
        <td className="btn btn-sm mt-3 bg-transparent hover:shadow-2xl hover:bg-transparent p-1">
          <i className="fa-regular lg:text-2xl fa-pen-to-square"></i>
        </td>
      </Link>
      <Link to={`/manageSingleFood/${_id}`}>
        <td className="btn btn-ghost btn-xs mt-5 p-1 lg:ml-10">Manage</td>
      </Link>
    </tr>
  );
};

export default MyFoodRow;
