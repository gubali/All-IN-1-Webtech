import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
  useEffect(() => {
document.title = `Count: ${count}`;
  }, [count]);
    return (
      <div>
        <p>111{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  export default Counter;


  