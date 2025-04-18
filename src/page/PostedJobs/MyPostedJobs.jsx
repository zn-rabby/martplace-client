/* eslint-disable react/prop-types */
import {
  BsFillCalendar2CheckFill,
  BsTrash,
  BsPencil,
  BsBriefcase,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobs = ({ postJobs, onDelete }) => {
  const {
    _id,
    title,
    jobCategory,
    salleryStart,
    salleryEnd,
    description,
    deadline,
    applied = [],
  } = postJobs || {};

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete Job Post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4741",
      cancelButtonColor: "#6C40B8",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "rounded-xl",
      },
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `https://martplace-server.vercel.app/jobs/${_id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          onDelete();
          Swal.fire({
            title: "Deleted!",
            text: "Your job has been deleted.",
            icon: "success",
            confirmButtonColor: "#6C40B8",
            customClass: {
              popup: "rounded-xl",
            },
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to delete job",
          icon: "error",
          confirmButtonColor: "#EF4741",
          customClass: {
            popup: "rounded-xl",
          },
        });
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-[#6C40B8] bg-[#6C40B8]/10 rounded-full">
              <BsBriefcase className="mr-1" /> {jobCategory}
            </span>
            <h2 className="mt-3 text-xl font-bold text-gray-900">{title}</h2>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {applied.length} applicants
          </span>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800">
            Salary:{" "}
            <span className="text-[#6C40B8]">
              ${salleryStart} - ${salleryEnd}
            </span>
          </h4>
        </div>

        <p className="text-gray-600 mb-5 line-clamp-3">{description}</p>

        <div className="flex items-center text-gray-600 mb-6">
          <BsFillCalendar2CheckFill className="mr-2 text-[#6C40B8]" />
          <span className="text-sm">
            Deadline:{" "}
            {new Date(deadline).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#EF4741] rounded-lg hover:bg-[#d13a35] transition-colors"
          >
            <BsTrash className="mr-2" />
            Delete
          </button>
          <Link
            to={`/jobs/update/${_id}`}
            className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#6C40B8] rounded-lg hover:bg-[#5A36A0] transition-colors"
          >
            <BsPencil className="mr-2" />
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;
