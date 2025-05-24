import { 
  useEffect, 
  useState 
} from 'react'
import { Link } from 'react-router'
import { updatePost } from '../service/postService'

export default function EditingPost({ 
  postId, 
  title,
  initialContent 
}) {

  const [content, setContent] = useState(initialContent);

  async function handleChange(e) {
    const newContent = e.target.value;

    console.log(".")
    
    setContent(newContent)
    await updatePost(postId, newContent)
  }

  return (
    <div className="bg-gray-100">
      <header className="fixed w-full bg-white border-b border-b-4 border-b-blue-400">
        <div className="px-8 py-2 flex justify-between">
          <h2 className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 fill-blue-400"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
            </svg>
            <span className="ml-4 text-lg text-gray-600">{title}</span>
          </h2>
          <Link to="/" className="flex items-center bg-gray-200 hover:bg-blue-400 p-3 rounded-full">
            <svg  
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              className="h-4 fill-white"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto pt-24">
        <textarea
          className="w-full min-h-screen p-8 bg-white outline-none"
          value={content}
          style={{ resize: "none", fieldSizing: "content" }}
          onChange={handleChange}
        />
      </main>
    </div>
  )
}