import React from "react";

const Staff = ({ name, position, photo }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={photo}
            alt={name}
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="text-gray-900 font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
