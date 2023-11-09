// import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
// import swal from "sweetalert";

const Subscribe = () => {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  //   const handleSubscribe = (e) => {
  //     e.preventDefault();
  //     swal("Thanks For Subscribe Us", "", "success");
  //   };

  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-lg border border-gray-200">
        <div data-aos="fade-up" data-aos-duration="1500" className="md:w-1/2">
          <h2 className="text-dark-01 font-semibold text-3xl md:text-4xl mb-2">
            Subscribe now
          </h2>
          <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
          <p className="text-dark-02 text-lg mb-5">
            Get latest updates, deals, and exclusive offers Every time.
          </p>
          <form>
            <input
              className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
            />
            <input
              className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
              type="email"
              name="email"
              placeholder="Your Email"
              id=""
            />
            <button
              className="py-3 px-10 text-white bg-[#6445BC] rounded inline-flex gap-3 items-center"
              type="submit"
            >
              Subscribe <FaPaperPlane></FaPaperPlane>
            </button>
          </form>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="md:w-1/2 p-10"
        >
          <img
            src="https://img.freepik.com/free-vector/subscriber-concept-illustration_114360-3895.jpg?w=1380&t=st=1699521785~exp=1699522385~hmac=962e2c846fd599096449738a5ae8a3b463d7bac350e10e14923edb3330a5bb6c"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
