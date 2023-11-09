import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CardDetails = () => {
  const [deadline, setDeadline] = useState(new Date());
  const today = new Date();
  const currentDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [currentYear, currentMonth, currentDay] = currentDate
    .split("-")
    .map(Number);

  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["jobsDetails"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/jobs/${id}`);
      return await data.json();
    },
  });

  if (isLoading == true) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-lg loading-spinner text-[#186AE3]"></span>
      </div>
    );
  }

  const {
    jobCategory,
    title,
    salleryStart,
    salleryEnd,
    description,
    postingDate,
    applicantNumber,
    email,
  } = data || {};

  const hanldemodalsubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.userEmail.value;
    const buyerEmail = form.modalEmail.value;

    const appliedInfo = {
      appliedEmail: userEmail,
      postTitle: title,
      jobCategory,
      salleryStart,
      salleryEnd,
      postDescription: description,
      postingDate,
      deadline,
      buyerEmail: buyerEmail,
      status: "",
    };

    {
      try {
        const response = await fetch("http://localhost:5000/bids", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appliedInfo),
        });
        const result = await response.json();

        if (result.acknowledged) {
          swal("done", "Job Applied Successfully", "success");
        }
        // if (email === buyerEmail) {
        //   swal("Sorry", "You Can't apply your own job.", "warning");
        //   return;
        // }
      } catch (error) {
        console.log(error);
      }

      form.reset("");
      return;
    }
  };

  return (
    <div>
      <div className="m-3">
        <Helmet>
          <title>MartPlace | Job-Details</title>
        </Helmet>

        <div>
          <div className="max-w-6xl rounded-md  shadow-md my-10 px-4 md:px-10 py-6 mx-auto bg-gray-800 border">
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 mb-2 text-white">
              <a href="#" className="py-1 font-bold text-md  md:text-lg mr-4">
                Sallery Range: {salleryStart} $ - ${salleryEnd}
              </a>
              <a href="#" className=" py-1 font-bold text-lg  mr-4">
                {email}
              </a>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#186AE3]">
                {title}
              </h2>
            </div>
            <div className="my-3 text-white">{description}</div>
            <div className="mt-2">
              <div className="flex justify-end items-center mt-2">
                <label
                  htmlFor="applyJobModal"
                  className="bg-[#186AE3] px-6 py-2 mt-1 rounded-md cursor-pointer text-white"
                >
                  Apply Now
                </label>
                <input
                  type="checkbox"
                  id="applyJobModal"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box">
                    <label htmlFor="applyJobModal" className="flex justify-end">
                      <AiOutlineCloseCircle className="text-4xl"></AiOutlineCloseCircle>
                    </label>

                    <h3 className="font-bold text-xl text-center">
                      Apply To The Job
                    </h3>
                    <form onSubmit={hanldemodalsubmit}>
                      <div className="md:flex">
                        <div className="form-control md:w-full mx-2">
                          <label className="label ">
                            <span className="label-text text-lg text-white">
                              Sallery Range
                            </span>
                          </label>

                          <label className="flex items-center">
                            <input
                              type="text"
                              defaultValue={salleryStart}
                              name="salleryStart"
                              placeholder="Min $$"
                              className="input input-bordered w-full"
                            />
                            <span className="text-xl font-semibold mx-4">
                              To
                            </span>
                            <input
                              type="text"
                              defaultValue={salleryEnd}
                              name="salleryEnd"
                              placeholder="Max $$"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="form-control  mx-2">
                        <label className="label ">
                          <span className="label-text text-lg text-white">
                            Job Deadline
                          </span>
                        </label>

                        <DatePicker
                          className="input input-bordered w-full"
                          selected={deadline}
                          onChange={(date) => setDeadline(date)}
                        />
                      </div>
                      <div className="form-control  mx-2">
                        <label className="label ">
                          <span className="label-text text-lg text-white">
                            User Email
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          defaultValue={user.email}
                          type="text"
                          name="userEmail"
                          id=""
                        />
                      </div>
                      <div className="form-control  mx-2">
                        <label className="label ">
                          <span className="label-text text-lg text-white">
                            Buyer Email
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          defaultValue={email}
                          type="text"
                          name="modalEmail"
                          id=""
                        />
                      </div>
                      <div method="dialog" className="flex justify-end">
                        <button type="submit" className="mt-4">
                          <label
                            className="bg-[#186AE3] px-8 py-2 rounded-md cursor-pointer text-white"
                            htmlFor="applyJobModal"
                          >
                            Bid Now
                          </label>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* modal end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default CardDetails;
