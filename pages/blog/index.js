import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'

function BlogPage({ posts }) {
  return (
    <div className="site-container">
      <div className="my-10">
        {posts.map((post) => {
          return (
            <article key={post.url}>
              <h2 className="text-2xl md:text-3xl font-bold">
                <Link href={post.url} className="hover">
                  {post.frontMatter.title}
                </Link>
              </h2>
              <p className="tracking-tighter">{post.frontMatter.excerpt}</p>
              <div className="mb-6 text-sm text-gray-400">
                <span>{post.frontMatter.date}</span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default BlogPage
