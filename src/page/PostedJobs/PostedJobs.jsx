import { useContext, useEffect, useState } from "react";
import useJobs from "../../hooks/useJobs";
import { AuthContext } from "../../provider/AuthProvider";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import MyPostedJobs from "./MyPostedJobs";

const PostedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const { data } = useJobs();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const filterData = data?.filter((item) => user?.email == item?.email);
    setMyData(filterData);
  }, [data, user?.email]);
  // console.log(myData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {myData?.map((postJobs) => (
        <MyPostedJobs postJobs={postJobs} key={postJobs._id}></MyPostedJobs>
      ))}
    </div>
  );
};

export default PostedJobs;
