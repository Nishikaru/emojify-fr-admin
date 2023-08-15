import HomeAddButtons from "@/component/homeAddButtons/HomeAddButtons";
import SideNav from "@/component/shared/sideNav/SideNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-50">
      <SideNav />
    </div>
  );
}
