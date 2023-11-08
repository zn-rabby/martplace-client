import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
// import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Nav = () => {
  // const [theme, setTheme] = useState(null);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);
  // const handleThemeSwich = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
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
      <li className="text-xl font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3]"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/addJob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3]"
          }
        >
          Add Job
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/postedJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3]"
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/bids"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3] "
          }
        >
          My Bids
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/bidRequests"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3] "
          }
        >
          Bid Requests
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3] "
          }
        >
          Login
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#186AE3] text-white"
              : "text-[#186AE3]"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  bg-[#856bb350] shadow text-black px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="p-2 flex gap-4 items-center font-bold text-2xl">
            <p className="hidden md:block text-[#186AE3]">
              <img src="https://i.ibb.co/GFqckGw/martplace.png" alt="" />
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div></div>
        <div className="navbar-end ">
          {/* <div className="mt-1 mx-2">
            {theme === "dark" ? (
              <button
                onClick={handleThemeSwich}
                className="text-3xl dark:text-white"
              >
                <MdOutlineLightMode />
              </button>
            ) : (
              <button
                onClick={handleThemeSwich}
                className="text-3xl dark:text-white"
              >
                <MdOutlineDarkMode />
              </button>
            )}
          </div> */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full border-2 border-[#186AE3]">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
              >
                <li>
                  <a className="justify-between font-semibold text-[#186AE3]">
                    {user.displayName}
                  </a>
                </li>
                <li>
                  <a className="justify-between text-[#186AE3]">{user.email}</a>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-[#186AE3] hover:bg-[#186AE3] hover:text-[white] font-semibold px-3 py-1 rounded text-base border border-[#186AE3] "
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              {" "}
              <button className="text-[#186AE3] hover:bg-[#186AE3] hover:text-[white] font-semibold px-4 py-2 rounded text-lg border border-[#186AE3] dark:border-white">
                Log In
              </button>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
