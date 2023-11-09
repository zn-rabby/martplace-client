// import { useState } from "react";

const BidsTab = ({ bid }) => {
  const { postTitle, appliedEmail, deadline, status } = bid || {};
  console.log(bid);

  // const [pro, setPro] = useState("Pending");
  // console.log(pro);

  // if (status === "confirm") {
  //   setPro("progress");
  // }
  // if (status === "reject") {
  //   setPro("reject");
  // } else {
  //   setPro("pending");
  // }
  return (
    <tr>
      <th>{postTitle}</th>
      <td>{appliedEmail}</td>
      <td>{deadline.slice(0, 10)}</td>
      <td>
        {status === "reject" ? (
          <span className="btn btn-ghost btn-sm bg-[#FF3811] text-white">
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
      {/* {status === "confirm" ? (
        <span className="btn btn-ghost btn-sm bg-primary text-white">
          progress
        </span>
      ) : (
        <button className="btn btn-ghost btn-sm bg-[#FF3811] text-white">
          Canceld
        </button>
      )} */}
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

export default BidsTab;
