const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();

  return (
    <div>
      <h1>User Id </h1>
      <h1>{user.name}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserDetailsPage;
