"use client";
import { ContextAPI } from "@/component/context/ContextAPI";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { VscEye } from "react-icons/vsc";

const Login = () => {
  const { loginStat, setLoginStat } = useContext(ContextAPI);
  const router = useRouter();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.user.value;
    const password = form.pass.value;
    const loginData = {
      email,
      password,
    };
    fetch("http://localhost:5000/login-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.okay);
        setLoginStat(data.okay);
        console.log(loginStat);
        if (data.okay) router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // console.log(loginData);
  };
  const [seePass, setSeePass] = useState(false);
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={(e) => loginHandler(e)}
        className="flex flex-col gap-3 text-center justify-center h-full md:h-fit w-full md:w-fit shadow-xl rounded-lg p-3 bg-orange-200"
      >
        <h1 className="text-xl font-semibold text-orange-700">
          Welcome to Admin panel
        </h1>
        <input
          className="border rounded-lg p-2 outline-none bg-transparent border-orange-700 placeholder:text-orange-700"
          type="text"
          name="user"
          id="user"
          placeholder="User Name"
        />
        <div className="flex justify-between items-center border border-orange-700 rounded-lg p-2 ">
          <input
            className="outline-none w-[90%] bg-transparent placeholder:text-orange-700"
            type={seePass ? "text" : "password"}
            name="pass"
            id="pass"
            placeholder="Password"
          />
          <label
            className="text-orange-700"
            onClick={() => setSeePass(!seePass)}
            htmlFor="pass"
          >
            <VscEye size={24} />
          </label>
        </div>
        <button className="text-orange-700 border rounded-md w-fit p-2 border-orange-700 mx-auto hover:bg-slate-50 transition-all">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
