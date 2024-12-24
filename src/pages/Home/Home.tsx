import Banner from "./Banner";
import Courses from "./Courses";
import ExclusiveFeature from "./ExclusiveFeature";
import FaqPart from "./FaqPart";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-primary">
      <Banner></Banner>
      {/* <Freeclass></Freeclass> */}
      <ExclusiveFeature></ExclusiveFeature>
      <Courses></Courses>
      <FaqPart></FaqPart>
      <Footer></Footer>
    </div>
  );
};

export default Home;
