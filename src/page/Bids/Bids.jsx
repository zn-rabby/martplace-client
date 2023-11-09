import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BidsTab from "./BidsTab";

const Bids = () => {
  const { user, loading } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`https://martplace-server.vercel.app/bids/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user.email]);
  console.log(bids);
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center font-semibold p-3">
          Your Bookings: {bids.length}
        </h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table border my-6">
              {/* head */}
              <thead>
                <tr className="bg-[#186AE3] text-white">
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bids?.map((bid) => (
                  <BidsTab
                    key={bid._id}
                    bid={bid}
                    // bookings={bookings}
                    // handelDelete={handelDelete}
                    // handleBookingConfirm={handleBookingConfirm}
                  ></BidsTab>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
