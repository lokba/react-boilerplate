import { useState } from "react";

const HomePage = () => {
  const [list, setList] = useState<number[]>([]);

  const handleClick = () => {
    setList((prev) => [...prev, new Date().getTime()]);
  };

  return (
    <div>
      <div>click the button</div>
      <button onClick={handleClick}>click</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
