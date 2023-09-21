"use client";
import { useGetPostsQuery } from "@/redux/services/posts";
import PostCard from "./PostCard";
import Loader from "./Loader";

function PostsList() {
  const { isFetching, isLoading, isError, isSuccess, error, data } =
    useGetPostsQuery(null);

  if (isFetching || isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-5">
      {isSuccess && data.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default PostsList;
