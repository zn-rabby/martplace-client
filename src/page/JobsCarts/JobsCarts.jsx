/* eslint-disable react/prop-types */
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobsCarts = ({ item }) => {
  const {
    _id,
    title,
    jobCategory,
    salleryStart,
    salleryEnd,
    description,
    deadline,
  } = item || {};

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className="bg-[#6C40B8]/10 text-[#6C40B8] text-xs font-medium px-2.5 py-0.5 rounded">
            {jobCategory}
          </span>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Salary Range:{" "}
            <span className="text-[#6C40B8]">
              ${salleryStart} - ${salleryEnd}
            </span>
          </h4>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center text-[#6C40B8]">
            <BsFillCalendar2CheckFill className="mr-2" />
            <span>{new Date(deadline).toLocaleDateString()}</span>
          </div>
          <Link
            to={`/jobs/${_id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#6C40B8] rounded-lg hover:bg-[#5A36A0] transition-colors"
          >
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCarts;
