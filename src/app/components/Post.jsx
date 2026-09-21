import Link from "next/link";

const Post = ({ post }) => {
  const { title, targetAudience, excerpt, id } = post;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{targetAudience}</p>
        <p className=" font-bold">{excerpt}</p>
        <div className="card-actions justify-end">
          <Link href={`../blog/${id}`}>
            <button className="btn btn-primary">Show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
