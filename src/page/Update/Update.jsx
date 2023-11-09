import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Update = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [jobCategory, setJobCategory] = useState("");
  const handleCategoryChange = (event) => {
    setJobCategory(event.target.value);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["jobsUpdates"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/jobs/${id}`);
      return await data.json();
    },
  });
  console.log(data);
  const { salleryStart, title, description, salleryEnd } = data || {};

  const handleUpdateJob = async (event) => {
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
    };
    console.log(jobObj);
    try {
      const response = await fetch(`http://localhost:5000/jobs/${id}`, {
        method: "PUT",
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

    // form.reset("");
  };
  return (
    <div>
      <Helmet>
        <title>MartPlace | Update</title>
      </Helmet>
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="border shadow-xl rounded-md p-4 my-6">
          <h2 className="text-2xl font-bold text-center text-[#186AE3]">
            Update Jobs
          </h2>
          <form onSubmit={handleUpdateJob}>
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
                  <span className="label-text text-lg text-white">
                    Job Title
                  </span>
                </label>
                <label className="">
                  <input
                    type="text"
                    defaultValue={title}
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
                    defaultValue={salleryStart}
                    name="salleryStart"
                    placeholder="Min $$"
                    className="input input-bordered w-full"
                  />
                  <span className="text-xl font-semibold mx-4">To</span>
                  <input
                    type="text"
                    defaultChecked={salleryEnd}
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
                  defaultValue={description}
                  name="description"
                  className="textarea input input-bordered w-full"
                  placeholder="Job Description"
                ></textarea>
              </label>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Update Job"
                className="bg-[#186AE3] hover:bg-[#186AE3] text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
