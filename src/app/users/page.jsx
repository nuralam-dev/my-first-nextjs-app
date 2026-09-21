import User from "../components/User";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return (
    <div  className="grid grid-cols-3 gap-1 my-1.5">
      {data.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default UsersPage;
