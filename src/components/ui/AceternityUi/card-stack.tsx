/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  price: string;
  fakePrice: string;
  details: string;

  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-80 md:h-80 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute  dark:bg-black bg-white h-[360px]  w-80 md:h-96 md:w-96 lg:w-[340px] xl:w-[415px] xl:h-[390px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal  text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-800 mt-3 mb-1 font-bold dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-600 text-sm my-2 md:my-1 font-medium dark:text-neutral-200 ">
                {card.designation}
              </p>
              <div className="flex z-50 gap-1 justify-between items-center ">
                <div className="flex gap-1 md:gap-3 items-center">
                  <p className="inline-block text-2xl font-bold">
                    {card.price}
                  </p>
                  <p className="line-through text-xl text-gray-400 font-bold">
                    {card.fakePrice}
                  </p>
                </div>
                <p className="z-50 cursor-pointer">
                  <Link
                    to={"https://web.facebook.com/spcacademybd"}
                    target="_blank"
                  >
                    <button className="inline-flex cursor-pointer h-12 animate-shimmer z-50 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      {card.details}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
