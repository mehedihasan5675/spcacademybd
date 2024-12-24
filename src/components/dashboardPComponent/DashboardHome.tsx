import TitleSeparator from "./commonCompo/TitleSeparator";
import EnrolledCourses from "./EnrolledCourses";

const DashboardHome = () => {
  return (
    <div>
      <div className="flex flex-col  md:flex-row">
        <div className="w-full md:w-7/12">
          <EnrolledCourses></EnrolledCourses>
        </div>
        <div className="w-full md:w-5/12">
          <TitleSeparator>Live result</TitleSeparator>
          {/* <PogressBar></PogressBar> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
