import { useState, useRef } from "react";

import { Counter, GenerateButton, IncreaseAllButton } from "./components";

import { list } from "./data";

function App() {
  const [counterList, setCounterList] = useState(list);
  const nextCounterId = useRef(4);
  console.log(counterList);
  console.log(nextCounterId);

  // event handling
  const increaseHandler = (id) => {
    setCounterList((prevCounterList) =>
      prevCounterList.map((item) => {
        if (item.id === id) {
          // ! ++ 會更改 item 本身，可能導致非預期的結果
          return { id: item.id, number: item.number + 1 };
        }
        return item;
      })
    );
  };

  const allIncreaseHandler = () => {
    setCounterList((prevCounterList) =>
      prevCounterList.map((item) => {
        // ! ++ 會更改 item 本身，可能導致非預期的結果
        return { id: item.id, number: item.number + 1 };
      })
    );
  };

  const generateHandler = () => {
    // ! 分離了 current 遞增 & 更新 counterList 的動作，確保動作的順序 & 同步性
    const newCounterList = [
      ...counterList,
      { id: nextCounterId.current, number: 0 },
    ];

    setCounterList(newCounterList);

    nextCounterId.current++;
  };

  return (
    <>
      <h1>Assignment 5</h1>
      <main>
        <IncreaseAllButton allIncreaseHandler={allIncreaseHandler} />

        {counterList.map((item) => {
          return (
            <Counter
              key={item.id}
              {...item}
              increaseHandler={increaseHandler}
            />
          );
        })}

        <GenerateButton generateHandler={generateHandler} />
      </main>
    </>
  );
}

export default App;
