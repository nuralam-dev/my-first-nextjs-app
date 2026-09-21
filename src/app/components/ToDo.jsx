import Link from "next/link";

const ToDo = ({ todo }) => {
  const { title, completed ,id} = todo;
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{completed}</p>
        <div className="card-actions justify-end">
          <Link href={`../todo/${id}`}><button className="bg-black color-white border-none rounded-2xl p-2">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
