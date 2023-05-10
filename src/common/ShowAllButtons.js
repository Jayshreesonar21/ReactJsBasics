const handleClick = (event, data) => {
  alert(`Button-${data} clicked !!`);
}

const MyBtn = ({ data, onClickCall }) => {
  return (
    <button 
      className="btn-color" 
      style={{ width: 150, height: 70, marginRight: 13 }}
      onClick={event => onClickCall(event, data)}
      >
      Button {data}
    </button>
  );
}

const ShowAllButtons = () => {
  return (
    <>
      <MyBtn data="1" onClickCall={handleClick}/>
      <MyBtn data="2" onClickCall={handleClick}/>
    </>
  );
}

export default ShowAllButtons;