import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-[70vh] justify-center bg-[url(https://www.myjobgator.com/assets/img/career.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#1f07255e] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 p-2">
            <div className=" space-y-3">
              <h1 className="text-3xl font-bold text-white">
                FIND THE JOB THAT FITS YOUR LIFE
              </h1>
              <div className="bg-[#1006135e]">
                <h2 className="text-3xl md:text-5xl font-bold inline-block p-2 rounded-md  bg-gradient-to-r from-primary to-[#EF4741] bg-clip-text text-transparent text-[#186AE3]">
                  We offer thousands of jobs vacancies right now
                </h2>
              </div>
              <button className="bg-[#186AE3] text-white text-xl font-semibold py-3 px-5 rounded flex justify-center items-center mb-6 mx-auto md:text-block">
                Explore More{" "}
                <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
