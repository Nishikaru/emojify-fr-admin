import React from "react";

const TextArea = ({ name, id, place }) => {
  return (
    <div className="w-full md:w-1/2">
      <textarea
        className="w-full border rounded-3xl p-2 px-3 placeholder:text-orange-700 text-orange-700 border-orange-700"
        name={name}
        id={id}
        placeholder={place}
        rows="5"
      ></textarea>
    </div>
  );
};

export default TextArea;
