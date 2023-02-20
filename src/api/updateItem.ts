import { CollectionReference, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase"

export const updateItem = async <T>(
  col: CollectionReference,
  id: string,
  data: T
) => {
  try {
    await updateDoc(doc(db, col.id, id), data!)
  } catch (error) {
    console.log(error)
  }
}
