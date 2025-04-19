/* eslint-disable react/prop-types */
const RequestBid = ({ bid, handleBookingAccept, handleBookingReject }) => {
  console.log(bid);
  const { postTitle, deadline, appliedEmail, _id, status } = bid || {};
  return (
    <tr className="hover">
      <th className="font-medium">{postTitle}</th>
      <td>{appliedEmail}</td>
      <td>{deadline.slice(0, 10)}</td>
      <td>
        {status === "reject" ? (
          <span className="badge badge-error text-white px-3 py-2">
            Rejected
          </span>
        ) : (
          <p>
            {status === "confirm" ? (
              <span className="badge badge-info text-white px-3 py-2">
                In Progress
              </span>
            ) : (
              <span className="badge badge-warning text-white px-3 py-2">
                Pending
              </span>
            )}
          </p>
        )}
      </td>
      <td>
        <button
          onClick={() => handleBookingAccept(_id)}
          className="btn btn-info btn-sm text-white hover:bg-blue-600 transition-colors"
          disabled={status === "confirm" || status === "reject"}
        >
          Accept
        </button>
      </td>
      <td>
        <button
          onClick={() => handleBookingReject(_id)}
          className="btn btn-error btn-sm text-white hover:bg-red-600 transition-colors"
          disabled={status === "confirm" || status === "reject"}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default RequestBid;
