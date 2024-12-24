import { Outlet } from "react-router-dom";
import MainSideBar from "../../pages/Dashboard/MainSideBar";
import Navbar from "../../pages/Home/Navbar";

const DashboardLayout = () => {
  const isAdmin: boolean = false;
  const isTeacher: boolean = false;
  return (
    // bg-gradient-to-r from-blue-300  from-5% via-slate-100 via-[percentage:30%_70%] to-red-100 to-100%
    <>
      <div className="bg-gradient-to-r from-blue-300  from-5% via-slate-100 via-[percentage:30%_70%] to-red-100 to-100% min-h-screen ">
        <div className="flex h-full relative w-full">
          <div className={`relative`}>
            <MainSideBar isTeacher={isTeacher} isAdmin={isAdmin}></MainSideBar>
          </div>

          <div className="h-full pl-20 sm:pl-24 w-full mx-auto">
            <div className="-mt-8">
              <Navbar></Navbar>
            </div>
            <div className="">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
