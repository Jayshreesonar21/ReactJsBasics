import { useState } from 'react';

const IncrementBtnCount = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
  <button 
    onClick={incrementCount} 
    style={{ width: 180, height: 50, fontSize: 20 }}>
    clicked - <span className='incrementFont'>{count}</span> times
  </button>
  );
}

export default IncrementBtnCount;