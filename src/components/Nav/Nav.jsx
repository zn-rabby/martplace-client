import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block text-sm md:text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-3 py-2 transition-colors duration-200`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            `block text-sm md:text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-3 py-2 transition-colors duration-200`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/postedJobs"
          className={({ isActive }) =>
            `block text-sm md:text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-3 py-2 transition-colors duration-200`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          My Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className={({ isActive }) =>
            `block text-sm md:text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-3 py-2 transition-colors duration-200`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bidRequests"
          className={({ isActive }) =>
            `block text-sm md:text-[15px] font-medium ${
              isActive
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-primary/10 hover:text-primary"
            } rounded-lg px-3 py-2 transition-colors duration-200`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Requests
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://i.ibb.co/GFqckGw/martplace.png"
                  alt="MartPlace Logo"
                  className="h-8"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <ul className="flex space-x-1">{navLinks}</ul>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Right side items - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative ml-3">
                <div className="flex items-center">
                  <button
                    className="flex items-center text-sm rounded-full focus:outline-none"
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full border-2 border-primary/50"
                      src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                      alt="User profile"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 hidden lg:inline">
                      {user.displayName || "User"}
                    </span>
                  </button>
                </div>

                {/* Dropdown menu */}
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm text-gray-900 font-medium">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul className="space-y-1">{navLinks}</ul>

          {!user ? (
            <div className="pt-2 space-y-1">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-primary/50"
                    src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-700">
                    {user.displayName || "User"}
                  </div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 px-3">
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
