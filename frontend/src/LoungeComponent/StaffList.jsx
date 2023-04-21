import React from "react";
import Staff from "./Staff";

const staffMembers = [
  {
    name: "John Doe",
    position: "CEO",
    photo: "https://example.com/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    photo: "https://example.com/jane-smith.jpg",
  },
  // additional staff members...
];

const StaffList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {staffMembers.map((staffMember) => (
        <Staff
          key={staffMember.name}
          name={staffMember.name}
          position={staffMember.position}
          photo={staffMember.photo}
        />
      ))}
    </div>
  );
};

export default StaffList;
