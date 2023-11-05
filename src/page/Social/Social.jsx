import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Social = () => {
  const { googleUserCreate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleUserCreate()
      .then((result) => {
        console.log(result);
        Swal.fire("Log In", "Successfully Login Now", "success");
        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex w-full">
      <button
        onClick={handleGoogleLogin}
        className="flex w-full justify-center  text-[#6C40B8] items-center text-lg font-semibold gap-5 border-2 rounded-full py-3 px-5 "
      >
        <AiFillGoogleCircle className="text-3xl"></AiFillGoogleCircle>
        Continue with Google
      </button>
    </div>
  );
};

export default Social;
