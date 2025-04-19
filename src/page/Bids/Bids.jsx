import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BidsTab from "./BidsTab";
import { FiClock, FiDollarSign } from "react-icons/fi";

const Bids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://martplace-server.vercel.app/bids/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user.email]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="container md:p-4 mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <FiDollarSign className="text-blue-200" />
                Your Bids
              </h1>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                {bids.length} {bids.length === 1 ? "Bid" : "Bids"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : bids.length === 0 ? (
              <div className="text-center py-12">
                <FiClock className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-3 text-lg font-medium text-gray-900">
                  No bids yet
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your placed bids will appear here
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
                        Buyer Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bid Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bids.map((bid) => (
                      <BidsTab key={bid._id} bid={bid} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
