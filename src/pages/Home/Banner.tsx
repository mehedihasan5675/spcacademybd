import { CardStackDemo } from "../../components/ui/AceternityUi/cardstackComponent";
import { TypewriterEffectSmoothDemo } from "../../components/ui/AceternityUi/typewriterContainer";
import HeroAnimation from "../../components/ui/HeroAnimation";
import "../../index.css";
const Banner = () => {
  return (
    <div className="clipPath absolute top-0 left-0 w-full h-[800px]   lg:h-screen">
      {/* <Navbar></Navbar> */}
      <HeroAnimation></HeroAnimation>
      <div className="absolute left-0 top-16  lg:top-0 w-full h-full flex lg:flex-row items-center justify-between flex-col-reverse">
        <div className="h-full lg:h-screen lg:w-8/12 w-full items-center lg:items-center lg:mb-0 mb-20  justify-center lg:justify-start   flex ">
          <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
        </div>
        <div className="h-full lg:h-screen  lg:w-4/12  w-full items-center    flex  ">
          <CardStackDemo></CardStackDemo>
        </div>
      </div>
    </div>
  );
};

export default Banner;
