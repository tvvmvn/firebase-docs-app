import { 
  useEffect, 
  useState 
} from 'react'
import { Link } from 'react-router'
import { getPosts } from '../service/postService'

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  
  async function fetchData() {
    const _posts = await getPosts()
    setPosts(_posts);
  }

  return (
    <>
      <div className="h-52 bg-linear-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512"
            className="h-8 fill-white"
          >
            <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/>
          </svg>
          <span className="ml-2">MyDocs</span>
        </h1>
      </div>

      <main className="max-w-2xl mt-12 mx-auto">
        <ul>
          {posts.map(post => (
            <li key={post.id} className="border-b border-b-gray-200">
              <Link 
                to={"/posts/" + post.id} 
                className="p-4 flex justify-between hover:bg-gray-100"
              >
                <span>{post.title}</span>
                <span className="text-gray-400">{post.displayDate}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
