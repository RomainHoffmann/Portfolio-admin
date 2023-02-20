import { CollectionReference, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase"

export const removeItem = async <T>(
  col: CollectionReference,
  itemId: string
) => {
  try {
    await deleteDoc(doc(db, col.id, itemId))
  } catch (error) {
    console.log(error)
  }
}
