import { useState } from 'react';

const MyButton = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>Clicked me - {count} times</button>
  )
}

const UpdateIncrementValueTogether = () => {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setCount(count + 1);
  }
  return (
    <>
    <MyButton count = { count } onClick = {handleClick} />
    <MyButton count = { count } onClick = {handleClick} />
    </>
  )
}

export default UpdateIncrementValueTogether;