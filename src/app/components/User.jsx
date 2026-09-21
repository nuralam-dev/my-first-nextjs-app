import Link from "next/link";

const User = ({ user }) => {
  const { name, email, phone, website,id } = user;
  return (
    <div className="card card-dash bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <div className="card-actions justify-end">
          <Link href={`../users/${id}`}>
            <button className="btn btn-primary">Show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
