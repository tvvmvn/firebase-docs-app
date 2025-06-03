import { 
  HashRouter, 
  Routes, 
  Route, 
} from 'react-router'
import Home from './pages/Home.jsx'
import PostView from './pages/PostView.jsx'
import NotFound from './pages/NotFound.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes> 
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="posts/:postId" element={<PostView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}

