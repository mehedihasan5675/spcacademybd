"use client";
import { cn } from "../../../lib/utils";
import { CardStack } from "../AceternityUi/card-stack";
export function CardStackDemo() {
  return (
    <div className="lg:h-[40rem] h-[20rem] pt-10 md:pt-20 lg:pt-0 lg:mb-20 mb-16 flex items-center   justify-center lg:justify-start    w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-teal-100 text-teal-700 dark:bg-teal-700/[0.2] dark:text-teal-500 px-1 py-0.5 ",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "৭ সাবজেক্ট বান্ডেল প্যাকেজ Module 4 (HSC-25) ",
    designation: "SPC প্রিমিয়াম একাডেমিক প্রোগ্রাম",
    price: "৳৪৫০০",
    fakePrice: "৳৫০০০",

    details: "রেজিস্টার করুন",

    content: (
      <div>
        <img className="rounded-lg " src="/public/img/bannerImg.jpg" alt="" />
        <div></div>
      </div>
    ),
  },
  {
    id: 1,
    name: "৫ সাবজেক্ট বান্ডেল প্যাকেজ Module 4 (HSC-25)",
    designation: "SPC প্রিমিয়াম একাডেমিক প্রোগ্রাম",
    price: "৳৪৫০০ ",
    fakePrice: "৳৫০০০",
    details: "রেজিস্টার করুন",
    content: (
      <div>
        <img className="rounded-lg " src="/public/img/bannerImg.jpg" alt="" />
        {/* <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight>
        </p> */}
      </div>
    ),
  },
  {
    id: 2,
    name: "৪ সাবজেক্ট বান্ডেল প্যাকেজ Module 4 (HSC-25)",
    designation: "SPC প্রিমিয়াম একাডেমিক প্রোগ্রাম",
    price: "৳৪৫০০",
    fakePrice: "৳৫০০০",
    details: "রেজিস্টার করুন",
    content: (
      <div>
        <img className="rounded-lg " src="/public/img/bannerImg.jpg" alt="" />
        {/* <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club.
        </p> */}
      </div>
    ),
  },
];
