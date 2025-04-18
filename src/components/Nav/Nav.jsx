import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary shadow-md"
                : "text-gray-600 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-4 py-2 transition-all duration-300`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            `text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary shadow-md"
                : "text-gray-600 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-4 py-2 transition-all duration-300`
          }
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/postedJobs"
          className={({ isActive }) =>
            `text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary shadow-md"
                : "text-gray-600 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-4 py-2 transition-all duration-300`
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className={({ isActive }) =>
            `text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary shadow-md"
                : "text-gray-600 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-4 py-2 transition-all duration-300`
          }
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bidRequests"
          className={({ isActive }) =>
            `text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary shadow-md"
                : "text-gray-600 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-4 py-2 transition-all duration-300`
          }
        >
          Bid Requests
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-[15px] font-medium ${
                  isActive
                    ? "text-white bg-primary shadow-md"
                    : "text-gray-600 hover:bg-primary/10 hover:text-primary"
                } rounded-lg px-4 py-2 transition-all duration-300`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `text-[15px] font-medium ${
                  isActive
                    ? "text-white bg-primary shadow-md"
                    : "text-gray-600 hover:bg-primary/10 hover:text-primary"
                } rounded-lg px-4 py-2 transition-all duration-300`
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar bg-white shadow-sm px-4 md:px-8 py-3 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden hover:bg-primary/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-60 space-y-2"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/GFqckGw/martplace.png"
            alt="MartPlace Logo"
            className="h-8 md:h-9"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar hover:bg-primary/10"
            >
              <div className="w-9 md:w-10 rounded-full border-2 border-primary/50 hover:border-primary transition-all duration-300">
                <img
                  src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                  alt="User Profile"
                  className="object-cover"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-64"
            >
              <li className="px-4 py-3 border-b border-gray-100">
                <div className="font-semibold text-gray-800 truncate">
                  {user.displayName || "User"}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  {user.email}
                </div>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-primary hover:bg-primary hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 w-full text-left flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="btn btn-outline btn-primary btn-sm md:btn-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary btn-sm md:btn-md text-white hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
