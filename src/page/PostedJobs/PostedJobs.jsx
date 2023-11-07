import { useContext, useEffect, useState } from "react";
import useJobs from "../../hooks/useJobs";
import { AuthContext } from "../../provider/AuthProvider";

const PostedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const { data } = useJobs();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const filterData = data?.filter((item) => user?.email == item.email);
    setMyData(filterData);
  }, [data, user.email]);
  console.log(myData);
  return (
    <div>
      <h2>Posted Jobs</h2>
    </div>
  );
};

export default PostedJobs;
