"use client";
import React, { useState } from "react";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";

const PersonForm = () => {
  const [image, setImage] = useState(null);
  const onImageChange = (e) => {
    const photo = e.target.files[0];
    const imageURL = URL.createObjectURL(photo);
    setImage(imageURL);
  };

  const pushPerson = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const photoURL = form.image.files[0];
    const name = form.name.value;
    const dob = form.dob.value;
    const pob = form.pob.value;
    const bio = form.bio.value;
    const bodyDATA = new FormData();
    bodyDATA.append("file", photoURL);
    bodyDATA.append("upload_preset", "emojify-person");
    bodyDATA.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/`;
    fetch(url, {
      method: "POST",
      body: bodyDATA,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const personFormData = {
          image: res?.secure_url,
          name,
          dob,
          pob,
          bio,
        };
        fetch("http://localhost:5000/person/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personFormData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    console.log(photoURL);
  };

  return (
    <form onSubmit={pushPerson} className=" w-full flex flex-col items-center">
      <input
        onChange={onImageChange}
        className="hidden"
        type="file"
        name="image"
        id="image"
      />
      <label
        style={{ backgroundImage: `url(${image})` }}
        className="border-2 border-orange-700 border-dashed text-orange-700 font-semibold text-lg bg-orange-200 h-64 w-64 rounded-full z-20 flex items-center justify-center bg-cover bg-center"
        htmlFor="image"
      >
        {!image && "Photo"}
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
