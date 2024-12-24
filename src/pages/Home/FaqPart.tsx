import Lottie from "lottie-react";
import FAQanimation from "../../assets/FAQanimation.json";
const FaqPart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 py-5">
      <h1 className="text-2xl md:text-4xl mb-10 flex items-center  [perspective:1000px] bg-teal-800 text-white p-3 rounded-lg  overflow-auto   no-visible-scrollbar mx-auto ">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="flex py-5  items-center flex-col-reverse md:flex-row gap-3">
        <div className="w-full md:w-7/12">
          <div className="flex gap-3 flex-col">
            <div className="collapse collapse-arrow bg-emerald-100">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-emerald-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-emerald-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-emerald-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-emerald-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <Lottie animationData={FAQanimation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default FaqPart;
