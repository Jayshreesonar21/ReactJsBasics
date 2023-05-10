import users from './users';

const formatedUsers = users.map(user => {
  const userInfo = (user.age) > 18 ? { fontColor: "green", status: ">" } : { fontColor: "red", status: "<" };
  return (
    <li key={user.id} style={{ color: userInfo.fontColor, fontWeight: "bold" }}>
      {user.name + ` is ${userInfo.status} 18`}
    </li>
  )
});

const ShowAllUsers = () => {
  return (
    <ul>{formatedUsers}</ul>
  );
}

export default ShowAllUsers;