import React from "react";
import Input from "../inputs/Input";

const ContentForm = () => {
  return (
    <form className="w-full flex flex-col">
      <input type="file" name="cover" id="cover" className="hidden" />
      <label
        htmlFor="cover"
        className="border-2 border-dashed border-orange-700 rounded-2xl flex items-center justify-center text-2xl text-orange-700 font-semibold w-full h-40 md:h-80"
      >
        Cover Here
      </label>
      <input type="file" name="photo" id="photo" className="hidden" />
      <label
        htmlFor="photo"
        className="border border-orange-700 rounded-full flex items-center justify-center text-orange-700 font-semibold w-36 md:w-44 h-36 md:h-44 mt-[-70px] bg-slate-50 ml-4 md:ml-12"
      >
        Photo
      </label>
    </form>
  );
};

export default ContentForm;
