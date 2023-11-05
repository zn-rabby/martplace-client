import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const [postingDate, setPostingDate] = useState(new Date());
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
    const username = form.username.value;
    const salleryStart = form.salleryStart.value;
    const salleryEnd = form.salleryEnd.value;
    const applicantNumber = form.applicantNumber.value;
    const description = form.description.value;
    const jobObj = {
      email,
      title,
      username,
      jobCategory,
      salleryStart,
      salleryEnd,
      description,
      postingDate,
      deadline,
      applicantNumber,
    };
    console.log(jobObj);
    // try {
    //   const response = await fetch("http://localhost:5000/jobs", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(jobObj),
    //   });
    //   const result = await response.json();

    //   if (result.acknowledged) {
    //     // swal("done", "Job Posted Successfully", "success");
    //     alert("success");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    form.reset("");
  };

  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <div className="border shadow-xl rounded-md p-4 my-6">
        <h2 className="text-2xl font-bold text-center text-[#152475]">
          Add A Job
        </h2>
        <form onSubmit={handleAddJob}>
          <div className="md:flex">
            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-black">
                  Picture URL for the Job Banner
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
                <span className="label-text text-lg text-black">Job Title</span>
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
              <label className="label">
                <span className="label-text text-lg text-black">
                  Logged In Username
                </span>
              </label>
              <label className="">
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  name="username"
                  placeholder="Logged in user name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-black ">
                  Job Category
                </span>
              </label>
              <select
                className="input input-bordered w-full"
                value={jobCategory}
                onChange={handleCategoryChange}
              >
                <option selected>Choose Job Category</option>
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part Time">Part Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          {/* ---- */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-black ">
                  Sallery Range
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="text"
                  name="salleryStart"
                  placeholder="000 $"
                  className="input input-bordered w-full"
                />
                <span className="text-xl font-semibold mx-4">To</span>
                <input
                  type="text"
                  name="salleryEnd"
                  placeholder="000 $"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-black">
                  Job Posting Date
                </span>
              </label>

              <DatePicker
                className="input input-bordered w-full"
                selected={postingDate}
                onChange={(date) => setPostingDate(date)}
              />
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control md:w-1/2 mx-2">
              <label className="label ">
                <span className="label-text text-lg text-black ">
                  Application Deadline
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
                <span className="label-text text-lg text-black">
                  Job Applicants Number
                </span>
              </label>
              <label className="">
                <input
                  defaultValue={0}
                  type="number"
                  name="applicantNumber"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control w-full mx-2 pr-4">
            <label className="label">
              <span className="label-text text-lg text-black">
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
              className="bg-[#152475] hover:bg-[#152475] text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
