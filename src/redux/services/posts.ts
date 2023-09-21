import { Posts } from "@/interfaces/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts, null>({
      query: () => "users",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
export default postsApi;
