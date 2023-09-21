import { Post } from "@/interfaces/interfaces";

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <div className="bg-gray-700 hover:bg-gray-800 transition-colors ease-in p-5">
      <h3 className="text-xl sm:text-2xl font-medium">{post.name}</h3>
      <p className="my-1 text-lg sm:text-xl text-gray-200">{post.username}</p>
      <span className="my-1 text-lg sm:text-xl text-gray-200">
        {post.email}
      </span>
    </div>
  );
}

export default PostCard;
