import { db } from './firebase'
import {
  doc,
  setDoc,
  getDocs,
  collection,
  Timestamp
} from 'firebase/firestore'

export default async function seedDatabase() {

  const seedData = await getDocs(collection(db, "posts"));

  if (seedData.size == 0) {
    const postsRef = collection(db, "posts");

    await setDoc(doc(postsRef, "doc0"), {
      title: "A beautiful spring day",
      content: "This is first content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis similique ullam eum adipisci consequatur laboriosam illo ipsa praesentium dolorum alias? Porro maxime tempore quod repellat! Perspiciatis temporibus eius sed excepturi!",
      dateCreated: Timestamp.fromDate(new Date("April 10, 2024"))
    });

    await setDoc(doc(postsRef, "doc1"), {
      title: "Summer is for falling in love",
      content: "This is second content.",
      dateCreated: Timestamp.fromDate(new Date("July 20, 2024"))
    });

    await setDoc(doc(postsRef, "doc2"), {
      title: "Autumn leaves",
      content: "This is third content.",
      dateCreated: Timestamp.fromDate(new Date("November 4, 2025"))
    });

    await setDoc(doc(postsRef, "doc3"), {
      title: "Winter wonderland",
      content: "This is fourth content.",
      dateCreated: Timestamp.fromDate(new Date("December 24, 2024"))
    });
  }
}


