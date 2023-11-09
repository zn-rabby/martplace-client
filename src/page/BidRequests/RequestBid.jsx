const RequestBid = ({ bid, handleBookingAccept, handleBookingReject }) => {
  console.log(bid);
  const { postTitle, deadline, appliedEmail, _id, status } = bid || {};
  return (
    <tr>
      <th>{postTitle}</th>
      <td>{appliedEmail}</td>
      <td>{deadline.slice(0, 10)}</td>
      <td>
        {status === "reject" ? (
          <span className="btn btn-ghost  btn-sm bg-[#FF3811] text-white">
            reject
          </span>
        ) : (
          <p>
            {status === "confirm" ? (
              <span className="btn btn-ghost btn-sm bg-[#186AE3] text-white">
                progress
              </span>
            ) : (
              <span className="btn btn-ghost btn-sm bg-primary text-white">
                pending
              </span>
            )}
          </p>
        )}
      </td>
      <td>
        <button
          onClick={() => handleBookingAccept(_id)}
          className="btn btn-ghost btn-sm bg-[#186AE3] text-white"
        >
          Accept
        </button>
      </td>
      <td>
        <button
          onClick={() => handleBookingReject(_id)}
          className="btn btn-ghost btn-sm bg-[#FF3811] text-white"
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default RequestBid;
