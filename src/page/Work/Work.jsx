import { BiSolidUserAccount } from "react-icons/bi";
import { BsFillSendCheckFill, BsSearch } from "react-icons/bs";
const Work = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold py-5">How We Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* card one */}
        <div className="p-4 rounded-md border border-[#186AE3] space-y-2 shadow-md">
          <BiSolidUserAccount className="text-4xl mx-auto text-[#186AE3]"></BiSolidUserAccount>
          <h1 className="text-2xl text-center text-white font-bold">
            Create an Account
          </h1>
          <p className="text-sm text-center">
            Sign up today to unlock exclusive benefits and access our services.
          </p>
        </div>
        <div className="p-4 rounded-md border border-[#186AE3] space-y-2 shadow-md">
          <BsSearch className="text-4xl mx-auto text-[#186AE3]"></BsSearch>
          <h1 className="text-2xl text-center text-white font-bold">
            Find Your Job
          </h1>
          <p className="text-sm text-center">
            SSubmit your application for exciting career opportunities and new
            challenges
          </p>
        </div>
        <div className="p-4 rounded-md border border-[#186AE3] space-y-2 shadow-md">
          <BsFillSendCheckFill className="text-4xl mx-auto text-[#186AE3]"></BsFillSendCheckFill>
          <h1 className="text-2xl text-center text-white font-bold">
            Explore and Apply
          </h1>
          <p className="text-sm text-center">
            It is long established fact reader distracted readable content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
