import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-300  from-5% via-slate-100 via-[percentage:30%_70%] to-red-100 to-100% min-h-screen">
        <Navbar></Navbar>

        <div className="h-full max-w-full mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
// bg-gradient-to-br from-red-300 from-5% via-green-300 via-[percentage:20%_70%] to-blue-300 to-100%
// bg-gradient-to-r from-blue-200 from-5% via-slate-50 via-[percentage:30%_60%]  to-red-200 to-100%
export default MainLayout;
