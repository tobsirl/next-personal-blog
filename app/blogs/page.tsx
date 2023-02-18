import Link from "next/link";
import { getAllPosts } from "@/lib/cms";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.id}>
           <div>
            <h2>{post.title}</h2>
           </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}