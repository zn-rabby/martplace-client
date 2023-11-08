// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import useBids from "../../hooks/useBids";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bids = () => {
  const { user, loading } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/bids/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user.email]);
  console.log(bids);
  // // console.log(user.email);
  // const { data } = useBids();
  // const [myData, setMyData] = useState([]);
  // // console.log(data);

  // useEffect(() => {
  //   const filterData = data?.filter(
  //     (item) => user?.email == item?.email
  //   );
  //   setMyData(filterData);
  // }, [data, user?.email]);
  // console.log(myData);

  return (
    <div>
      <h2>Bids</h2>
    </div>
  );
};

export default Bids;
