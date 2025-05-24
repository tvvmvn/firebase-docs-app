import { 
  HashRouter, 
  Routes, 
  Route, 
} from 'react-router'
import Home from './pages/Home.jsx'
import PostView from './pages/PostView.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:postId" element={<PostView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

