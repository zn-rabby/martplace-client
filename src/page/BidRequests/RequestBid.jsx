const RequestBid = ({ bid, handleBookingAccept, handleBookingReject }) => {
  console.log(bid);
  const { postTitle, deadline, appliedEmail, _id } = bid || {};
  return (
    <tr>
      <th>{postTitle}</th>
      <td>{appliedEmail}</td>
      <td>{deadline.slice(0, 10)}</td>
      <td>
        <button className="btn btn-ghost btn-sm bg-[#FF3811] text-white">
          Pending
        </button>
      </td>
      <td>
        <button
          onClick={() => handleBookingAccept(_id)}
          className="btn btn-ghost btn-sm bg-[#FF3811] text-white"
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
      {/* <th>
        {status === "confirm" ? (
          <span className="btn btn-ghost btn-sm bg-primary text-white">
            Confirm
          </span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-sm bg-[#FF3811] text-white"
          >
            Please Confirm
          </button>
        )}
      </th> */}
    </tr>
  );
};

export default RequestBid;
