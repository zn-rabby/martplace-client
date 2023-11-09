import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobs = ({ postJobs }) => {
  console.log(postJobs);
  const {
    _id,
    email,
    title,
    jobCategory,
    salleryStart,
    salleryEnd,
    description,
    deadline,
  } = postJobs || {};

  const handleDelete = async (_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(`http://localhost:5000/jobs/${_id}`, {
              method: "DELETE",
            });
            const result = await response.json();
            if (result.deletedCount > 0) {
              // const filterCart = brandCarts.filter((cart) => cart._id !== _id);
              // setBrandCarts(filterCart);
              Swal.fire("Delete", "Successfully Delete", "success");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="max-full gap-2 m-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p>{email}</p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#6C40B8]">
          {title}
        </h2>
        <h3>{jobCategory}</h3>

        <h4 className="text-xl font-semibold text-white flex gap-2 items-center">
          Price range:
          <span>${salleryStart}</span>
          <span className="text-lg font-medium text-white">-</span>
          <span>${salleryEnd}</span>
        </h4>
        <p className="mb-3 font-normal text-white">
          {description.slice(0, 100)}
        </p>
        <h2 className="flex gap-2 items-center text-white">
          <BsFillCalendar2CheckFill></BsFillCalendar2CheckFill>{" "}
          {deadline.slice(0, 10)}
        </h2>

        <div className="flex justify-between text-lg font-semibold mt-3">
          <button
            onClick={() => handleDelete(_id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#aa312d] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Delete
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
          <Link to={`/jobs/update/${_id}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6C40B8] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Update
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
    </div>
  );
};

export default MyPostedJobs;
