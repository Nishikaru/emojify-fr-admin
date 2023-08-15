import Search from "@/component/inputs/Search";
import PersonForm from "@/component/personComponent/PersonForm";
import SideNav from "@/component/shared/sideNav/SideNav";
import React from "react";

const person = () => {
  return (
    <div className="h-screen md:flex bg-slate-50">
      <SideNav />
      <div className="w-full flex flex-col gap-12 items-center p-3 md:p-12">
        <div>
          <form>
            <Search />
          </form>
        </div>
        <div className="w-full">
          <PersonForm />
        </div>
      </div>
    </div>
  );
};

export default person;
