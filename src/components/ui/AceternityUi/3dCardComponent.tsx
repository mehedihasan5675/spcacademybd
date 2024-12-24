"use client";

import { CardBody, CardContainer, CardItem } from "../AceternityUi/3d-card";
// Define the type for the course item prop
interface CourseItem {
  id: number;
  name: string;
  designation: string;
  price: string;
  fakePrice: string;
  details: string;
  category: string;
  img_url: string;
}

interface CoursesCardProps {
  coursesItem: CourseItem; // Accept the coursesItem prop
}
export const ThreeDCardDemo: React.FC<CoursesCardProps> = ({ coursesItem }) => {
  return (
    <CardContainer className="inter-var px-2 ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] xl:w-[24rem] lg:w-[20rem] md:w-[23rem] w-full h-auto rounded-xl p-4 lg:p-2 xl:p-5 border  ">
        <CardItem translateZ="90" className="w-full">
          <img
            src={coursesItem?.img_url}
            height="1000"
            width="1000"
            className="h-56 sm:h-60 md:h-56 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="30"
          className="text-lg mt-3 font-bold text-neutral-600 dark:text-white"
        >
          {coursesItem.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {coursesItem.designation}
        </CardItem>

        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ="30"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 flex gap-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <CardItem
              translateZ="30"
              className="inline-block text-2xl font-bold"
            >
              {coursesItem.price}
            </CardItem>
            <CardItem
              translateZ="30"
              className="line-through text-xl text-gray-400 font-bold"
            >
              {coursesItem.fakePrice}
            </CardItem>
          </CardItem>

          <CardItem
            translateZ="30"
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-medium"
          >
            {coursesItem.details}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
