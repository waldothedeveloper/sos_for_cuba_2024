import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";

export default function Posts() {
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post._meta.path}>
          <MDXContent code={post.mdx} />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </li>
      ))}
    </ul>
  );
}
