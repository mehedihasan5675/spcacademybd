import React, { ReactNode } from "react";
import { BackgroundGradient } from "../../ui/AceternityUi/background-gradient";

interface TitleSeparatorProps {
  children: ReactNode; // Accepts any valid React children (text, elements, etc.)
}

const TitleSeparator: React.FC<TitleSeparatorProps> = ({ children }) => {
  return (
    <div className="flex w-full justify-center md:justify-start my-8">
      <div className="w-[95%] mx-auto md:mx-0  text-center">
        <BackgroundGradient className="font-semibold w-full  tracking-wide text-white text-lg inline-block px-3 py-1  ">
          {children}
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default TitleSeparator;
