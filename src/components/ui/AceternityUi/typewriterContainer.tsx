"use client";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "../AceternityUi/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "জানার",
    },
    {
      text: "জন্য,",
    },
    {
      text: "শেখার",
    },

    {
      text: "জন্য।",
    },

    {
      text: "SPC Academy.",
      className: "text-blue-500 dark:text-blue-500 ",
    },
  ];
  return (
    <div className="flex flex-col w-full sm:w-fit  md:mt-10 lg:mt-0  p-5 items-center justify-start lg:justify-center  h-[15rem] lg:h-[40rem]  ">
      <p className="text-neutral-700  dark:text-neutral-200 text-lg sm:text-xl mx-2 ">
        পড়াশোনা আর জীবন বিষয়ক দিক নির্দেশনার জন্য জয়েন করো SPC পরিবার ফেসবুক
        গ্রুপে
      </p>

      <TypewriterEffectSmooth
        className="w-full flex justify-center"
        words={words}
      />

      <div className="flex z-50 flex-row  space-y-0   space-x-2 md:space-x-4">
        <Link target="_blank" to={"https://www.facebook.com/spcacademybd"}>
          <button className="md:w-40  md:h-10 w-32 h-10 rounded-xl bg-black border cursor-pointer  dark:border-white border-transparent text-white text-sm">
            Join now Fb
          </button>
        </Link>

        <Link target="_blank" to={"https://www.facebook.com/spcacademybd"}>
          <button className="md:w-40  md:h-10 w-32 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
