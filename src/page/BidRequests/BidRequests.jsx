import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import RequestBid from "./RequestBid";
import {  FiClock, FiDollarSign, FiUser } from "react-icons/fi";
import { AuthContext } from "../../provider/AuthProvider";

const BidRequests = () => {
  const { user, loading } = useContext(AuthContext);
  const data = useLoaderData();
  const [bidRequest, setBidRequest] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const filterData = data.filter((item) => item.appliedEmail !== user?.email);
    setBidRequest(filterData);
  }, [data, user?.email]);

  const updateBidStatus = (id, status) => {
    setIsUpdating(true);
    fetch(`https://martplace-server.vercel.app/bids/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBidRequest((prev) =>
            prev.map((bid) => (bid._id === id ? { ...bid, status } : bid))
          );
        }
      })
      .finally(() => setIsUpdating(false));
  };

  const handleBookingAccept = (id) => updateBidStatus(id, "confirm");
  const handleBookingReject = (id) => updateBidStatus(id, "reject");

  return (
    <div>
      <Helmet>
        <title>MartPlace | Bids Request</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-5">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiDollarSign className="text-2xl text-blue-200" />
                  <h1 className="text-2xl font-bold text-white">
                    Bid Requests
                  </h1>
                </div>
                <div className="flex items-center gap-2 mt-3 sm:mt-0">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <FiUser className="text-blue-100" />
                    {user?.displayName || "User"}
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {bidRequest.length} Requests
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {loading ? (
                <div className="flex justify-center items-center py-12"></div>
              ) : bidRequest.length === 0 ? (
                <div className="text-center py-12">
                  <FiClock className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-3 text-lg font-medium text-gray-900">
                    No bid requests yet
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Requests for your jobs will appear here
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Job Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bidder Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bidRequest.map((bid) => (
                        <RequestBid
                          key={bid._id}
                          bid={bid}
                          handleBookingAccept={handleBookingAccept}
                          handleBookingReject={handleBookingReject}
                          isUpdating={isUpdating}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidRequests;
