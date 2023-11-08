import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Social from "../Social/Social";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [isShow, setIsShow] = useState(false);
  const [loginError, setLoginError] = useState("");
  // const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location.state ? location?.state : "/");
        Swal.fire("Log In", "Successfully Login Now", "success");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.code);
      });
  };

  return (
    <div>
      <Helmet>
        <title>MartPlace | Login</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-slate-50 border border-slate-300 rounded-lg  md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#186AE3] md:text-2xl">
              Login to your account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              {loginError && (
                <div>
                  <p className="text-red-600 font-bold">{loginError}</p>
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Email"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  "
                    required=""
                  />
                  <span
                    className="top-0 -ms-7"
                    onClick={() => setIsShow(!isShow)}
                  >
                    {isShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#186AE3] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-base text-center font-light text-gray-900">
                Don’t have an account yet?{" "}
                <Link to="/register">
                  <a
                    href="#"
                    className="font-medium text-[#186AE3] hover:underline "
                  >
                    Register
                  </a>
                </Link>
              </p>
              <div className="text-center">
                {/* {success && (
                  <div className="text-blue-600 font-bold">
                    <p>{success}</p>
                  </div>
                )} */}
              </div>
            </form>
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
