import { db } from '../firebase'
import { 
  doc, 
  setDoc, 
  getDoc,
  getDocs, 
  updateDoc,
  collection, 
  Timestamp
} from 'firebase/firestore'

export async function getPosts() {

  const querySnapshot = await getDocs(collection(db, "posts"));
  const posts = [];

  querySnapshot.forEach(doc => {
    const data = doc.data()
    const d = data.dateCreated.toDate()
    
    posts.push({ 
      id: doc.id, 
      title: data.title,
      content: data.content,
      displayDate: `${d.getMonth() + 1}. ${d.getDate()}. ${d.getFullYear()}`
    })
  })

  return posts;
}

export async function getPost(postId) {

  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error();
  }
}

export async function updatePost(postId, newContent) {
  const postRef = doc(db, "posts", postId);

  await updateDoc(postRef, {
    content: newContent
  });
}