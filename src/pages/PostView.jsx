import { 
  useEffect, 
  useState 
} from 'react'
import { 
  useParams,
  useNavigate
} from 'react-router'
import { getPost } from '../service/postService.js'
import EditingPost from '../components/EditingPost.jsx';

export default function PostView() {
  
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const _post = await getPost(postId);
      setPost(_post)

    } catch (error) {
      navigate("/notfound", { replace: true })
    }
    setIsLoaded(true)
  }

  if (!isLoaded) {
    return <p className="p-8">Loading..</p>
  }

  return (
    <EditingPost 
      postId={postId}
      title={post.title}
      initialContent={post.content}
    />
  )
}
