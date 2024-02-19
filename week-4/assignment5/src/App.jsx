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
    const newCounterList = counterList.map((item) => {
      if (item.id === id) {
        // ! ++ doesn't increment the variable immediately, may lead to unexpected behavior
        // ! ++ returns the previous value , and the increment operation occurs on the next access
        return { ...item, number: item.number + 1 };
      }
      return item;
    });

    setCounterList(newCounterList);
  };

  const allIncreaseHandler = () => {
    const newCounterList = counterList.map((item) => {
      // ! ++ doesn't increment the variable immediately, may lead to unexpected behavior
      // ! ++ returns the previous value , and the increment operation occurs on the next access
      return { ...item, number: item.number + 1 };
    });

    setCounterList(newCounterList);
  };

  const generateHandler = () => {
    // ! 建立新的變數，分離 current 遞增 & 更新 counterList 的動作，確保動作的順序 & 同步性
    const newCounterList = [
      ...counterList,
      { id: nextCounterId.current, number: 0 },
    ];

    setCounterList(newCounterList);

    // ! current 遞增的動作不會受到 React's batching operation 的影響
    nextCounterId.current++;

    // ? 替代寫法 2 (better option)
    // setCounterList((prevCounterList) => {
    //   const newCounterList = [
    //     ...prevCounterList,
    //     { id: nextCounterId.current, number: 0 },
    //   ];

    //   nextCounterId.current++;

    //   return newCounterList;
    // });
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
