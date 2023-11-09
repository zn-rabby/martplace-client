import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import RequestBid from "./RequestBid";

const BidRequests = () => {
  const { user, loading } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const [bidRequest, setBidRequest] = useState([]);
  useEffect(() => {
    const filterData = data.filter((item) => item.appliedEmail !== user?.email);
    setBidRequest(filterData);
  }, [data, user?.email]);

  // console.log(bidRequest);
  return (
    <div>
      <Helmet>
        <title>MartPlace | Bids Request</title>
      </Helmet>
      <div>
        <div>
          <h2 className="text-4xl text-center font-semibold p-3">
            Your Bookings: {bidRequest.length}
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
                    <th>BTN</th>
                    <th>BTN</th>
                  </tr>
                </thead>
                <tbody>
                  {bidRequest?.map((bid) => (
                    <RequestBid
                      key={bid._id}
                      bid={bid}
                      // bookings={bookings}
                      // handelDelete={handelDelete}
                      // handleBookingConfirm={handleBookingConfirm}
                    ></RequestBid>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidRequests;
