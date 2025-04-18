import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date());
  const [jobCategory, setJobCategory] = useState("");

  const handleCategoryChange = (event) => {
    setJobCategory(event.target.value);
  };

  const handleAddJob = async (event) => {
    event.preventDefault();
    const form = event.target;
    const jobObj = {
      email: form.email.value,
      title: form.title.value,
      jobCategory,
      salleryStart: form.salleryStart.value,
      salleryEnd: form.salleryEnd.value,
      description: form.description.value,
      deadline,
      applied: [],
    };

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
        Swal.fire({
          title: "Job Added",
          text: "Job posted successfully!",
          icon: "success",
          confirmButtonColor: "#6C40B8",
        });
        form.reset();
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to add job",
        icon: "error",
        confirmButtonColor: "#EF4741",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>MartPlace | Add Jobs</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#6C40B8] to-[#EF4741] py-4 px-6">
            <h2 className="text-2xl font-bold text-center text-white">
              Post a New Job
            </h2>
          </div>

          <form onSubmit={handleAddJob} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                  readOnly
                />
              </div>

              {/* Job Title */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Senior Web Developer"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                />
              </div>

              {/* Deadline */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Application Deadline
                </label>
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  minDate={new Date()}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                  required
                />
              </div>

              {/* Job Category */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Job Category
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                  value={jobCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>
              </div>

              {/* Salary Range */}
              <div className="col-span-2 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Salary Range ($)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    name="salleryStart"
                    placeholder="Minimum"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    name="salleryEnd"
                    placeholder="Maximum"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                  />
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                name="description"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#6C40B8] focus:border-[#6C40B8]"
                placeholder="Describe the job responsibilities, requirements, and benefits..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6C40B8] to-[#EF4741] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
              >
                Post Job Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
