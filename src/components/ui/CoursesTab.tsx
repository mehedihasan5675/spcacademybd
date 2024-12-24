import { ThreeDCardDemo } from "./AceternityUi/3dCardComponent";

const CoursesTab = (props: {
  id: number;
  name: string;
  designation: string;
  price: string;
  fakePrice: string;
  details: string;
  category: string;
  payload?: string;
  img_url: string;
}) => {
  const {
    id,
    name,
    designation,
    price,
    fakePrice,
    details,
    category,
    img_url,
    payload,
  } = props;
  const coursesItem = {
    id,
    name,
    designation,
    price,
    fakePrice,
    details,
    category,
    img_url,
    payload,
  };
  return (
    <>
      <ThreeDCardDemo coursesItem={coursesItem}></ThreeDCardDemo>
    </>
  );
};

export default CoursesTab;
