import { auth } from '../firebase'
import { 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
  GithubAuthProvider,
  signInWithPopup
} from 'firebase/auth'

const provider = new GithubAuthProvider();

export async function signInWithGithub() {
  await signInWithPopup(auth, provider)
}

export async function signIn(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
}

export async function logOut() {
  await signOut(auth)
}

export async function getCurrentUser() {
  return auth.currentUser;
}

export async function authStateListener(setUser, setLoaded) {
  onAuthStateChanged(auth, (user) => {
    setUser(user)
    // when first rendering
    setLoaded(true)
  })
}