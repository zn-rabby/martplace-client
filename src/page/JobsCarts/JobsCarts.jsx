import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";

const JobsCarts = ({ item }) => {
  const {
    _id,
    email,
    title,
    jobCategory,
    salleryStart,
    salleryEnd,
    description,
    deadline,
  } = item || {};
  return (
    <div className="max-full gap-2 m-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>

      <h4 className="text-xl font-semibold text-white flex gap-2 items-center">
        Price range:
        <span>${salleryStart}</span>
        <span className="text-lg font-medium text-white">-</span>
        <span>${salleryEnd}</span>
      </h4>
      <p className="mb-3 font-normal text-white">{description.slice(0, 100)}</p>

      <div className="flex justify-between text-lg font-semibold">
        <h2 className="flex gap-2 items-center text-[#6C40B8]">
          <BsFillCalendar2CheckFill></BsFillCalendar2CheckFill>{" "}
          {deadline.slice(0, 10)}
        </h2>
        <Link to={`/jobs/${_id}`}>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6C40B8] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Bid Now
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCarts;
