import { Highlight } from "../../components/ui/AceternityUi/cardstackComponent";
const Freeclass = () => {
  return (
    <div className="bg-[#DAFFEF] w-full pt-[630px] lg:pt-[600px] ">
      <div className="flex flex-col px-5 py-8 md:px-10 md:pt-10 lg:px-20 lg:pt-16 lg:flex-row gap-5">
        <div className="lg:w-1/2 w-full ">
          <p className="lg:text-4xl !leading-relaxed tracking-wider  font-semibold text-2xl my-5">
            <Highlight>সকল Free</Highlight> ক্লাস, নোট এবং রুটিন দেখতে ক্লিক করো
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex gap-5 items-center">
              <p className="size-8 md:size-10 flex justify-center items-center bg-teal-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" size-5  text-[#08605F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </p>
              <p className="md:text-xl hover:text-teal-700 duration-150 font-semibold text-lg">
                <a href="">ক্লাস রুটিন</a>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <p className="size-8 md:size-10 flex justify-center items-center bg-teal-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" size-5  text-[#08605F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </p>
              <p className="md:text-xl hover:text-teal-700 duration-150 font-semibold text-lg">
                <a href="">ফ্রি ক্লাস</a>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <p className="size-8 md:size-10 flex justify-center items-center bg-teal-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" size-5  text-[#08605F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </p>
              <p className="md:text-xl hover:text-teal-700 duration-150 font-semibold text-lg">
                <a href="">ফ্রি নোটস</a>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="px-8 py-2 flex gap-5 g items-center rounded-md bg-teal-700 text-white font-bold transition duration-200 hover:bg-transparent group hover:text-black border-2 border-transparent  hover:border-teal-700">
              <p>এখানে ক্লিক করো</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" size-5 group-hover:text-black text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center justify-center">
            <img
              className="h-80 md:h-[500px]"
              src="../../../public/img/freeclass.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex pb-10 mx-5 flex-col items-center justify-center">
        <h1 className="lg:text-2xl text-center !leading-relaxed tracking-wider  font-semibold text-xl mb-2">
          তোমার প্রয়োজন, আমাদের আয়োজন
        </h1>
        <p className="w-full md:w-5/12 text-slate-700 text-base md:text-lg text-center">
          পরীক্ষায় ভালো করার পাশাপাশি ভবিষ্যতের জন্যে নিজেকে পরিপূর্ণভাবে গড়ে
          তোলার দিক নির্দেশনা পাবে এসপিসি এর কাছ থেকে।
        </p>
      </div>
    </div>
  );
};

export default Freeclass;
