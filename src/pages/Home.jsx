import { 
  useEffect, 
  useState 
} from 'react'
import { Link } from 'react-router'
import { getPosts } from '../service/postService'
import ThemeButton from '../components/ThemeButton'
import { logOut } from '../service/authService'

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
      <header className="w-full bg-white dark:bg-gray-800">
        <div className="px-8 py-4 flex justify-between">
          <h2 className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 fill-blue-400"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
            </svg>
            <span className="ml-4 text-lg text-gray-600 dark:text-white">
              MyDocs
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <ThemeButton />
            <button 
              className="font-bold text-sm px-2 py-1 rounded-md text-white bg-gray-400 dark:bg-gray-700 cursor-pointer" 
              onClick={logOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="h-52 bg-linear-to-t from-cyan-500 to-blue-500 dark:from-blue-900 dark:to-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white flex items-center">
          Workspace for all.
        </h1>
      </div>

      <main className="max-w-2xl mt-8 mx-auto">
        <ul>
          {posts.map(post => (
            <li key={post.id} className="border-b border-b-gray-200 dark:border-b-gray-800">
              <Link 
                to={"/posts/" + post.id} 
                className="p-4 flex justify-between hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="dark:text-white">{post.title}</span>
                <span className="text-gray-400">{post.displayDate}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
