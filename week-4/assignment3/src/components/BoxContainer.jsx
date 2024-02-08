import { useGlobalContext } from "../context";

import { boxList } from "../utilize";

const BoxContainer = () => {
  const { isBoxesHide } = useGlobalContext();

  const newBoxList = isBoxesHide ? boxList.slice(0, 4) : boxList.slice();

  return (
    <div className="box-container">
      {newBoxList.map((box) => {
        return (
          <div key={box.id} className="box">
            {box.title}
          </div>
        );
      })}
    </div>
  );
};

export default BoxContainer;
