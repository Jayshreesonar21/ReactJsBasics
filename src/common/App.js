import ShowAllButtons from './ShowAllButtons';
import ShowAllUsers from './ShowAllUsers';
import IncrementBtnCount from './IncrementBtnCount';
import UpdateIncrementValueTogether from './UpdateIncrementValueTogether';
import Products from './Products';

export default function App() {
  return (
    <>
      {console.log("Running...")}
      <h3 style={{ background: "pink" }}>Welcome to my app </h3>
      <ShowAllButtons />
      <h3 style={{ background: "#baba7d" }}>Show users information</h3>
      <ShowAllUsers />
      <h3 style={{ background: "#dfa342" }}>Increment counter</h3>
      <IncrementBtnCount />
      <h3 style={{ background: "#62d45a" }}>Increment two buttons counter together</h3>
      <UpdateIncrementValueTogether />
      <h3 style={{ background: "#8384c7" }}>Products</h3>
      <Products />
    </>
  );
}