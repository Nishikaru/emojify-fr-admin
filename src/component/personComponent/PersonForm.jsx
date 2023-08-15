import React from "react";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";

const PersonForm = () => {
  return (
    <form className=" w-full flex flex-col items-center">
      <input className="hidden" type="file" name="image" id="image" />
      <label
        className="border-2 border-orange-700 border-dashed text-orange-700 font-semibold text-lg bg-orange-200 h-64 w-64 rounded-full z-20 flex items-center justify-center"
        htmlFor="image"
      >
        Photo
      </label>
      <div className="h-36 border-t border-orange-700 border-dashed mt-[-100px] w-full md:w-1/2 rounded-[100%]"></div>
      <div className="w-full flex flex-col gap-6 items-center pb-20">
        <Input type={"text"} place={"Name"} name={"name"} id={"name"} />
        <Input type={"text"} place={"Date of Birth"} name={"dob"} id={"dob"} />
        <Input type={"text"} place={"Place of Birth"} name={"pob"} id={"pob"} />
        <TextArea place={"Bio"} name={"bio"} id={"bio"} />
        <button className="border border-orange-700 rounded-2xl p-3 text-orange-700 transition-all hover:bg-orange-200">
          Upload
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
