import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Social from "../Social/Social";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  //handleRegister
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password, photo);
    // password validation
    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your Password should have at least one Uppercase");
      return;
    } else if (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
      setRegisterError(
        "Your Password should have at least one Special Characters"
      );
      return;
    }
    // rest error
    setRegisterError("");
    setSuccess("");
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        setSuccess("User create successfully");
        // update profile
        profileUpdate(name, photo)
          .then((result) => {
            console.log("update", result.user);
          })
          .catch((error) => {
            console.error(error);
          });
        // tost
        Swal.fire("Register", "Successfully Register Now", "success");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>MartPlace | Register</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-slate-50 border border-slate-300 rounded-lg  md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#186AE3] md:text-2xl">
              Register to your account
            </h1>
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
              {registerError && (
                <div>
                  <p className="text-red-600 font-bold">{registerError}</p>
                </div>
              )}
              {success && (
                <div className="text-blue-600 font-bold">
                  <p>{success}</p>
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Photo URL"
                  required
                />
              </div>
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
                  required
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
                Register
              </button>
              <p className="text-base text-center font-light text-gray-900">
                Don’t have an account yet?{" "}
                <Link to="/login">
                  <button
                    href="#"
                    className="font-semibold text-[#186AE3] hover:underline "
                  >
                    Login
                  </button>
                </Link>
              </p>
              <div className="text-center"></div>
            </form>
            {/* <Social></Social> */}
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
