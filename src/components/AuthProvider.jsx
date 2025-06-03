import { 
  useState, 
  useEffect,
  createContext, 
  useContext 
} from "react";
import { authStateListener } from "../service/authService";

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  console.log(user)

  useEffect(() => {
    authStateListener(setUser, setLoaded)
  }, [])

  if (!loaded) {
    return <p>Loading..</p>
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}