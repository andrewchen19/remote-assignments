import BoxContainer1 from "./BoxContainer1";
import ActionButton from "./ActionButton";
import BoxContainer2 from "./BoxContainer2";

import { useGlobalContext } from "../context";

const Main = () => {
  const { isBoxesHide } = useGlobalContext();

  return (
    <main>
      <h2>Section Title</h2>
      <BoxContainer1 />
      <ActionButton />
      {isBoxesHide || <BoxContainer2 />}
    </main>
  );
};

export default Main;
