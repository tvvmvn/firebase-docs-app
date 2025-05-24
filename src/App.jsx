import { useEffect, useState } from 'react'
import { 
  HashRouter, 
  Routes, 
  Route, 
  Outlet, 
  Link,
  useParams
} from 'react-router'

const DATA = [
  { id: "d0", title: "first docs", content: "this is first content" },
  { id: "d1", title: "second docs", content: "this is second content" },
  { id: "d2", title: "third docs", content: "this is third content" },
]

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AuthRequired />}>
            <Route index element={<Home />} />
            <Route path="posts/:postId" element={<PostView />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

function AuthProvider({ children }) {
  return children;
}

function AuthRequired() {
  return <Outlet/>
}

function PostView() {
  
  const { postId } = useParams();
  const post = DATA.find(data => data.id == postId)
  
  return (
    <>
      <Link to="/">Home</Link>

      <h1>Post View</h1>
      <p>{post.title}</p>
      <textarea value={post.content} />
    </>
  )
}

function Home() {

  const [posts, setPosts] = useState(DATA);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={"posts/" + post.id}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

function Login() {

}

function NotFound() {
  
}
