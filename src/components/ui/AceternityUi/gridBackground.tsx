import { TChindrenProps } from "../../../hooks/commonTypes";
import "../../../index.css";
export function GridSmallBackgroundDemo({ children }: TChindrenProps) {
  return (
    <div className="h-[800px] lg:max-h-screen   w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.03] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black banner_bg [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="text-4xl w-full h-screen sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </div>
    </div>
  );
}
