import { useState, useRef } from "react";

import { Counter, GenerateButton, IncreaseAllButton } from "./components";

import { list } from "./data";

function App() {
  const [counterList, setCounterList] = useState(list);
  const nextCounterId = useRef(4);

  // event handling
  const increaseHandler = (id) => {
    setCounterList((prevCounterList) =>
      prevCounterList.map((item) => {
        if (item.id === id) {
          item.number++;
          return item;
        }
        return item;
      })
    );
  };

  const allIncreaseHandler = () => {
    setCounterList((prevCounterList) =>
      prevCounterList.map((item) => {
        item.number++;
        return item;
      })
    );
  };

  const generateHandler = () => {
    setCounterList((prevCounterList) => [
      ...prevCounterList,
      {
        id: nextCounterId.current,
        number: 0,
      },
    ]);
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
