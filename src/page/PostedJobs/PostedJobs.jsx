import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useJobs from "../../hooks/useJobs";
import MyPostedJobs from "./MyPostedJobs";
import { Link } from "react-router-dom";

const PostedJobs = () => {
  const { user } = useContext(AuthContext);
  const { data } = useJobs();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (data && user?.email) {
      const filterData = data.filter((item) => user.email === item.email);
      setMyData(filterData);
    }
  }, [data, user?.email]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#6C40B8] to-[#EF4741] bg-clip-text text-transparent">
              Your Posted Jobs
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage all your job listings in one place
          </p>
        </div>

        {myData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myData.map((postJobs) => (
              <MyPostedJobs
                key={postJobs._id}
                postJobs={postJobs}
                onDelete={() =>
                  setMyData(myData.filter((job) => job._id !== postJobs._id))
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-md mx-auto">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                No Jobs Posted Yet
              </h3>
              <p className="text-gray-600 mb-6">
                You haven{"'"}t posted any jobs yet. Create your first job
                listing to get started.
              </p>
              <Link
                to="/addJob"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6C40B8] to-[#EF4741] text-white font-medium rounded-lg hover:shadow-md transition-all"
              >
                Post a Job
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostedJobs;
