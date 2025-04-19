/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";

const CardDetails = () => {
  const [deadline, setDeadline] = useState(new Date());
  const today = new Date();
  const currentDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const [currentYear, currentMonth, currentDay] = currentDate
    .split("-")
    .map(Number);

  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["jobsDetails"],
    queryFn: async () => {
      const res = await fetch(`https://martplace-server.vercel.app/jobs/${id}`);
      return await res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-lg loading-spinner text-primary"></span>
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
    email,
  } = data || {};

  const handleModalSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.userEmail.value;
    const buyerEmail = form.modalEmail.value;

    if (user.email === buyerEmail) {
      swal("Sorry", "You Can't apply to your own job.", "warning");
      return;
    }

    const appliedInfo = {
      appliedEmail: userEmail,
      postTitle: title,
      jobCategory,
      salleryStart,
      salleryEnd,
      postDescription: description,
      postingDate,
      deadline,
      buyerEmail,
      status: "",
    };

    try {
      const response = await fetch("https://martplace-server.vercel.app/bids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appliedInfo),
      });
      const result = await response.json();

      if (result.acknowledged) {
        swal("Success", "Job Applied Successfully", "success");
        refetch();
      }
    } catch (error) {
      console.error(error);
      swal("Error", "Failed to apply for job", "error");
    }

    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Helmet>
        <title>MartPlace | Job Details</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="card-title text-3xl font-bold text-primary">
                  {title}
                </h2>
                <div className="badge badge-primary mt-2">{jobCategory}</div>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-lg font-semibold">
                  Salary: ${salleryStart} - ${salleryEnd}
                </p>
                <p className="text-gray-600">Posted by: {email}</p>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700">{description}</p>
            </div>

            <div className="card-actions justify-end">
              <label
                htmlFor="applyJobModal"
                className="btn btn-primary px-8 text-white"
              >
                Apply Now
              </label>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        <input type="checkbox" id="applyJobModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Apply To The Job</h3>
              <label htmlFor="applyJobModal" className="btn btn-circle btn-sm">
                <AiOutlineCloseCircle className="text-xl" />
              </label>
            </div>

            <form onSubmit={handleModalSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Salary Range</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue={salleryStart}
                      name="salleryStart"
                      placeholder="Min $$"
                      className="input input-bordered w-full"
                      readOnly
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="text"
                      defaultValue={salleryEnd}
                      name="salleryEnd"
                      placeholder="Max $$"
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job Deadline</span>
                  </label>
                  <DatePicker
                    className="input input-bordered w-full"
                    selected={deadline}
                    onChange={(date) => setDeadline(date)}
                    minDate={new Date()}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    className="input input-bordered w-full"
                    defaultValue={user?.email}
                    type="email"
                    name="userEmail"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Employer Email</span>
                  </label>
                  <input
                    className="input input-bordered w-full"
                    defaultValue={email}
                    type="email"
                    name="modalEmail"
                    readOnly
                  />
                </div>
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary w-full">
                  Submit Application
                </button>
              </div>
            </form>
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
