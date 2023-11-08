import { useEffect, useRef, useState } from "react";
import AllFood from "../AllFood/AllFood";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  useEffect(() => {
    fetch(
      `https://micro-server-side.vercel.app/allFood?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [asc, search]);

  return (
    <div className="py-20">
      <Helmet>
        <title>Micro Donation | Available Food</title>
      </Helmet>
      <h1 className="text-center text-5xl font-bold dark:text-white mt-10">
        Available Food Section
      </h1>
      <div className=" flex justify-center gap-3 mt-4">
        <button onClick={() => setAsc(!asc)} className="btn btn-neutral">
          {asc ? "Sort by Asc" : " Sort by Desc"}
        </button>
        <div className="form-control">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:mx-48 py-20 ">
        {data?.map((items) => (
          <AllFood key={items.id} items={items}></AllFood>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
