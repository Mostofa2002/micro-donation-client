import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { TfiMenu } from "react-icons/tfi";
import useAuth from "../hooks/useAuth";
const Nav = () => {
  const { user, LogOut } = useAuth();

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <div className="lg:mx-14">
      <div className=" dark:bg-gray-800 navbar bg-transparent ">
        <div className="navbar-start">
          {/* phone */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost xl:hidden">
              <TfiMenu className="text-xl font-bold dark:text-white "></TfiMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] bg-opacity-20 dark:text-white bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 w-64"
            >
              <NavLink to="/">
                <li className="text-xl font-semibold ">
                  <a>Home</a>
                </li>{" "}
              </NavLink>
              <NavLink to="/productAdd">
                <li className="text-xl font-semibold">
                  <a>Add Food</a>
                </li>
              </NavLink>
              <NavLink to="/availableFood">
                <li className="text-xl font-semibold">
                  <a>Available Foods</a>
                </li>
              </NavLink>

              <NavLink to="/manageMyFood">
                <li className="text-xl font-semibold">
                  <a>Manage My Food</a>
                </li>
              </NavLink>
              <NavLink to="/myCart">
                <li className="text-xl font-semibold">
                  <a>My Food Request </a>
                </li>
              </NavLink>
              <NavLink to="/login">
                <li className="text-xl font-semibold">
                  <a>Login</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <h1>
            <Logo />
          </h1>
          {/* large devices */}
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu dark:text-white menu-horizontal px-1">
            <NavLink to="/">
              <li className="text-xl font-semibold ">
                <a>Home</a>
              </li>{" "}
            </NavLink>
            <NavLink to="/productAdd">
              <li className="text-xl font-semibold">
                <a>Add Food</a>
              </li>
            </NavLink>
            <NavLink to="/availableFood">
              <li className="text-xl font-semibold">
                <a>Available Foods</a>
              </li>
            </NavLink>
            <NavLink to="/manageMyFood">
              <li className="text-xl font-semibold">
                <a>Manage My Food</a>
              </li>
            </NavLink>
            <NavLink to="/myCart">
              <li className="text-xl font-semibold">
                <a>My Food Request </a>
              </li>
            </NavLink>
            <NavLink to="/login">
              <li className="text-xl font-semibold">
                <a>Login</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="navbar-end">
            <div className="dropdown dropdown-end md:mr-10 xl:mr-0 lg:mr-0 mr-5  ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                {user ? (
                  <div className="w-10 rounded-full ">
                    <img src={user.photoURL} alt="" />
                  </div>
                ) : (
                  <div className="w-10 rounded-full border-none">
                    <img src="https://i.ibb.co/HDJMNSK/user.png" alt="" />
                  </div>
                )}
              </label>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content mt-3 z-[1]"
              >
                <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2">
                  <a href="#" className="flex items-center p-3 -mt-2">
                    {user ? (
                      <div className="mx-1">
                        <h1 className="text-sm font-semibold text-black">
                          {user.displayName}
                        </h1>
                        <p className="text-sm text-black/70">{user.email}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </a>

                  <hr className="border-gray-200 " />

                  <Link to="/register">
                    <button className="block px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1">
                      Create Account
                    </button>
                  </Link>
                  {user && (
                    <button
                      onClick={handleLogOut}
                      className="block px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1"
                    >
                      Sign Out
                    </button>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
