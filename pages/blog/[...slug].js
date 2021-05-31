import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../components/mdx-components'
import { useAuth0 } from '@auth0/auth0-react'

export default function PostPage({ post }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  const content = useHydrate(post, {
    components: mdxComponents
  })

  return (
    <div className="site-container">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mt-10">{post.frontMatter.title}</h1>
        <p className="my-4">{post.frontMatter.excerpt}</p>
        <hr className="my-4" />
        <div className="prose-white pb-6">{content}</div>
      </article>
      
      <form>
        <textarea rows="2" className="border rounded w-full block px-2 py-2 focus:outline-none focus:ring bg-gray-400 focus:bg-gray-100 focus:border-blue-500 text-gray-900 placeholder-gray-900" placeholder="What are your thoughts?" />
        <div className="mt-4 pb-10">
          {isAuthenticated ? (
            <div className="flex relative items-center space-x-2">
              <div className="">
                <button className="bg-blue-800 hover:bg-green-600 px-4 py-1 rounded">
                  Send
                </button> 
              </div>
              <div className="flex absolute right-0 space-x-2">
                <img src={user.picture} width={24} height={24} className="rounded-full" />
                <span>{user.name}</span>
                <button
                  typeof="button"
                  className="bg-blue-800 hover:bg-red-600 rounded"
                  onClick={() => 
                    logout({ returnTo: process.env.NEXT_PUBLIC_URL + "/blog" })
                  }
                >
                  <img className="" alt="" src="/icons/close.svg"></img>
                </button>
              </div>
              
            </div>
          ) : (
            <div>
                <button 
                  typeof="button"
                  className="bg-blue-800 px-4 py-1 rounded"
                  onClick={() => 
                    loginWithRedirect({ returnTo: process.env.NEXT_PUBLIC_URL + "/blog" })
                  }
                > 
                  Login 
                </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
