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
            `text-lg font-semibold ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10"
            } rounded-lg px-4 py-2 transition-colors`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10"
            } rounded-lg px-4 py-2 transition-colors`
          }
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/postedJobs"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10"
            } rounded-lg px-4 py-2 transition-colors`
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10"
            } rounded-lg px-4 py-2 transition-colors`
          }
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bidRequests"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10"
            } rounded-lg px-4 py-2 transition-colors`
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
                `text-lg font-semibold ${
                  isActive
                    ? "text-white bg-primary"
                    : "text-gray-700 hover:bg-primary/10"
                } rounded-lg px-4 py-2 transition-colors`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `text-lg font-semibold ${
                  isActive
                    ? "text-white bg-primary"
                    : "text-gray-700 hover:bg-primary/10"
                } rounded-lg px-4 py-2 transition-colors`
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
    <nav className="container mx-auto">
      <nav className="navbar bg-white shadow-sm px-4 md:px-8 py-3 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-1"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/GFqckGw/martplace.png"
              alt="MartPlace Logo"
              className="h-10"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-primary">
                  <img src={user.photoURL} alt="User Profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-64"
              >
                <li className="px-4 py-2 border-b border-gray-100">
                  <div className="font-semibold text-gray-800">
                    {user.displayName}
                  </div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-primary hover:bg-primary hover:text-white font-semibold px-4 py-2 rounded-lg text-base transition-colors w-full text-left"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn btn-outline btn-primary">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary text-white">Register</button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </nav>
  );
};

export default Nav;
