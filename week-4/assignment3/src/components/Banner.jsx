import { useState } from "react";

const Banner = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <section className="banner">
      <h1 onClick={() => setIsClick(!isClick)}>
        {isClick ? "Have a Good Time!" : "Welcome Message"}
      </h1>
    </section>
  );
};

export default Banner;
