import { BackgroundGradient } from "../AceternityUi/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

export function BackgroundGradientDemo() {
  return (
    <div className="w-72 md:w-60 ">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-3 md:p-2  bg-white dark:bg-zinc-900">
        <img
          src="../../../../public/img/bannerImg.jpg"
          alt="jordans"
          height={400}
          width={400}
          className="object-contain rounded-2xl"
        />
        <p className="text-base md:text-base  text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm md:text-xs  text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Already </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Registered
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
