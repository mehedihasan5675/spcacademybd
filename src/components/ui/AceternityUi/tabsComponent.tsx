"use client";

import { useEffect, useState } from "react";
import { Tabs } from "./tabs";
export function TabsDemo() {
  //   const tabs = [
  //     {
  //       title: "Product",
  //       value: "product",
  //       content: (
  //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //           <p>Product Tab</p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "Services",
  //       value: "services",
  //       content: (
  //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //           <p>Services tab</p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "Playground",
  //       value: "playground",
  //       content: (
  //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //           <p>Playground tab</p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "Content",
  //       value: "content",
  //       content: (
  //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //           <p>Content tab</p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "Random",
  //       value: "random",
  //       content: (
  //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //           <p>Random tab</p>
  //         </div>
  //       ),
  //     },
  //   ];
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => {
        setTabs(data);
      });
  }, []);
  //   console.log(tabs);
  return (
    <div className=" [perspective:1000px] relative b flex bg-primary flex-col max-w-7xl mx-auto w-full  items-start justify-start my-20 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
