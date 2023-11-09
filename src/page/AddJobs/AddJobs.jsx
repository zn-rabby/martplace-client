import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  // const [postingDate, setPostingDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());

  const [jobCategory, setJobCategory] = useState("");
  const handleCategoryChange = (event) => {
    setJobCategory(event.target.value);
  };

  const handleAddJob = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const title = form.title.value;
    const salleryStart = form.salleryStart.value;
    const salleryEnd = form.salleryEnd.value;
    const description = form.description.value;
    const jobObj = {
      email,
      title,
      jobCategory,
      salleryStart,
      salleryEnd,
      description,
      deadline,
      applied: [],
    };
    console.log(jobObj);
    try {
      const response = await fetch("https://martplace-server.vercel.app/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobObj),
      });
      const result = await response.json();

      if (result.acknowledged) {
        Swal.fire("Jobs Add", "Successfully Jobs Add", "success");
      }
    } catch (error) {
      console.log(error);
    }

    form.reset("");
  };

  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <Helmet>
        <title>MartPlace | Add-Jobs</title>
      </Helmet>
      <div className="border shadow-xl rounded-md p-4 my-6">
        <h2 className="text-2xl font-bold text-center text-[#186AE3]">
          Add Jobs
        </h2>
        <form onSubmit={handleAddJob}>
          <div className="md:flex">
            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-white">
                  Your Email
                </span>
              </label>
              <label className="">
                <input
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mx-2">
              <label className="label">
                <span className="label-text text-lg text-white">Job Title</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* ---- */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 mx-2">
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

            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-white ">
                  Job Category
                </span>
              </label>
              <select
                className="input input-bordered w-full"
                value={jobCategory}
                onChange={handleCategoryChange}
              >
                <option selected>Choose Job Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
              </select>
            </div>
          </div>
          {/* ---- */}
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
                  name="salleryStart"
                  placeholder="Min $$"
                  className="input input-bordered w-full"
                />
                <span className="text-xl font-semibold mx-4">To</span>
                <input
                  type="text"
                  name="salleryEnd"
                  placeholder="Max $$"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full mx-2 pr-4">
            <label className="label">
              <span className="label-text text-lg text-white">
                Job Description
              </span>
            </label>
            <label className="">
              <textarea
                name="description"
                className="textarea input input-bordered w-full"
                placeholder="Job Description"
              ></textarea>
            </label>
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Add Job"
              className="bg-[#186AE3] hover:bg-[#186AE3] text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
