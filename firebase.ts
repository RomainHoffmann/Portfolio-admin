import * as firebase from "firebase/app"
import { initializeApp } from "firebase/app"
import "firebase/firestore"
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore"
import { Project } from "./src/types"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

if (!firebase.getApps().length) {
  initializeApp(firebaseConfig)
}

export default firebase

export const db = getFirestore()

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

export const projectsCol = createCollection<Project>("projects")
