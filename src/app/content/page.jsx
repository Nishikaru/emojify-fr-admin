import ContentForm from "@/component/contentComponents/ContentForm";
import Search from "@/component/inputs/Search";
import SideNav from "@/component/shared/sideNav/SideNav";
import React from "react";

const content = () => {
  return (
    <div className="h-screen overflow-auto md:flex bg-slate-50">
      <SideNav />
      <div className="flex flex-col gap-6 items-center w-full overflow-auto p-4 md:py-12">
        <form>
          <Search />
        </form>
        <div className="w-full">
          <ContentForm />
        </div>
      </div>
    </div>
  );
};

export default content;
