import React from "react";

const Input = ({ type, id, name, place }) => {
  return (
    <div>
      <input
        className="border border-orange-700 p-2 px-3 text-orange-700 placeholder:text-orange-700 rounded-full"
        type={type}
        placeholder={place}
      />
    </div>
  );
};

export default Input;
