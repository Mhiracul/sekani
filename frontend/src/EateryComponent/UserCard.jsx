import React from "react";

function UserCard({ id, firstName, lastName, email, password, onDelete }) {
  return (
    <tr style={{ border: "1px solid black" }}>
      <td className="p-2">{id}</td>
      <td className="p-6">
        {firstName} {lastName}
      </td>
      <td className="p-6">{email}</td>
      <td className="p-6">{password}</td>
      <td className="p-8">
        {" "}
        <button
          className="bg-[#FB320D] text-white px-2 py-1 rounded-md "
          onClick={onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserCard;
