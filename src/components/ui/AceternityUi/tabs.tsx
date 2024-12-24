// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { TCoursesContent } from "../../../hooks/commonTypes";
// import { cn } from "../../../lib/utils";
// import CoursesTab from "../CoursesTab";

// type Tab = {
//   title: string;
//   value: string;
//   content?: TCoursesContent[];
// };

// export const Tabs = ({
//   tabs: propTabs,
//   containerClassName,
//   activeTabClassName,
//   tabClassName,
//   contentClassName,
// }: {
//   tabs: Tab[];
//   containerClassName?: string;
//   activeTabClassName?: string;
//   tabClassName?: string;
//   contentClassName?: string;
// }) => {
//   const [active, setActive] = useState<Tab>(propTabs[0]);
//   const [tabs, setTabs] = useState<Tab[]>(propTabs);

//   const moveSelectedTabToTop = (idx: number) => {
//     const newTabs = [...propTabs];
//     const selectedTab = newTabs.splice(idx, 1);
//     newTabs.unshift(selectedTab[0]);
//     setTabs(newTabs);
//     setActive(newTabs[0]);
//   };

//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     // Ensure the first tab is active by default
//     if (propTabs.length > 0) {
//       setActive(propTabs[0]);
//       setTabs(propTabs);
//     }
//   }, [propTabs]);
//   return (
//     <>
//       <div
//         className={cn(
//           "flex flex-row items-center flex-wrap justify-center [perspective:1000px] relative overflow-auto px-4 md:gap-3 gap-3 sm:overflow-visible no-visible-scrollbar max-w-full w-full",
//           containerClassName
//         )}
//       >
//         {propTabs.map((tab, idx) => (
//           <button
//             key={tab.title}
//             onClick={() => {
//               moveSelectedTabToTop(idx);
//             }}
//             onMouseEnter={() => setHovering(true)}
//             onMouseLeave={() => setHovering(false)}
//             className={cn(
//               "relative bg-emerald-100  text-white px-6 py-2 rounded-lg",
//               tabClassName
//             )}
//             style={{
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {active?.value === tab?.value && (
//               <motion.div
//                 layoutId="clickedbutton"
//                 transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
//                 className={cn(
//                   "absolute inset-0  bg-emerald-200 dark:bg-zinc-800 rounded-full ",
//                   activeTabClassName
//                 )}
//               />
//             )}

//             <span className="relative font-semibold block text-black dark:text-white uppercase px-5">
//               {tab.title}
//             </span>
//           </button>
//         ))}
//       </div>
//       <FadeInDiv
//         tabs={tabs}
//         active={active}
//         key={active?.value}
//         hovering={hovering}
//         className={cn("mt-32", contentClassName)}
//       />
//     </>
//   );
// };

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string;
//   key?: string;
//   tabs: Tab[];
//   active: Tab;
//   hovering?: boolean;
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab?.value === tabs[0]?.value;
//   };
//   return (
//     <div className="relative flex flex-wrap  items-center w-full bg-primary h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab?.value}
//           layoutId={tab?.value}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -50 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 1.5 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn("w-full !mt-10 h-full !bg-primary ", className)}
//         >
//           <div className="bg-primary  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16  gap-10">
//             {tab?.content?.map((item, i) => (
//               <CoursesTab
//                 key={i}
//                 id={item.id}
//                 name={item.name}
//                 designation={item.designation}
//                 price={item.price}
//                 fakePrice={item.fakePrice}
//                 details={item.details}
//                 img_url={item.img_url}
//                 category={item.category}
//               ></CoursesTab>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TCoursesContent } from "../../../hooks/commonTypes";
import { cn } from "../../../lib/utils";
import CoursesTab from "../CoursesTab";

type Tab = {
  title: string;
  value: string;
  anyInfo?: string;
  content?: TCoursesContent[];
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Ensure the first tab is active by default
    if (propTabs.length > 0) {
      setActive(propTabs[0]);
      setTabs(propTabs);
    }
  }, [propTabs]);
  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center flex-wrap justify-center [perspective:1000px] bg-teal-800 py-3 rounded-lg relative overflow-auto  md:gap-4  gap-3 sm:overflow-visible no-visible-scrollbar mx-auto  w-[95%]",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative bg-emerald-100  text-white px-6 py-2 rounded-lg",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active?.value === tab?.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0  bg-emerald-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative font-semibold block text-black dark:text-white uppercase px-5">
              {tab.title}
            </span>
            <span
              className={`${
                tab.anyInfo
                  ? "absolute !z-50  -top-2 text-white -right-2 justify-center bg-rose-600 rounded-lg font-mono  px-2 py-1 h-6 flex items-center"
                  : ""
              }`}
            >
              {tab.anyInfo}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active?.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab?.value === tabs[0]?.value;
  };
  return (
    <div className="relative flex flex-wrap  items-center w-full bg-primary h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab?.value}
          layoutId={tab?.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 1.5 : 0,
            display: isActive(tab) ? "block" : "none",
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full !mt-10 h-full !bg-primary ", className)}
        >
          <div className="bg-primary  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-5 px-4">
            {tab?.content?.map((item, i) => (
              <CoursesTab
                key={i}
                id={item.id}
                name={item.name}
                designation={item.designation}
                price={item.price}
                fakePrice={item.fakePrice}
                details={item.details}
                img_url={item.img_url}
                payload={item.payload}
                category={item.category}
              ></CoursesTab>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
