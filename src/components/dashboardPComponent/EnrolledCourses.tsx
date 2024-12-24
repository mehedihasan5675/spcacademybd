import { BackgroundGradientDemo } from "../ui/AceternityUi/backgroundGradientComponent";
import TitleSeparator from "./commonCompo/TitleSeparator";

const EnrolledCourses = () => {
  return (
    <div className="flex flex-col justify-center md:justify-start ">
      <div>
        <TitleSeparator>Enrolled courses</TitleSeparator>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row items-center md:items-start gap-3">
        <BackgroundGradientDemo></BackgroundGradientDemo>
        <BackgroundGradientDemo></BackgroundGradientDemo>
        <BackgroundGradientDemo></BackgroundGradientDemo>
      </div>
    </div>
  );
};

export default EnrolledCourses;
