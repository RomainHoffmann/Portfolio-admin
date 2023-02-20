import {
  CollectionReference,
  DocumentData,
  getDocs,
  Query,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore"

type Constraint = {
  fieldPath: string
  opStr: WhereFilterOp
  value: any
}

export const fetchAllItems = async <T>(
  col: CollectionReference,
  constraint?: Constraint
) => {
  let response: Record<string, T> = {}

  let q: Query<DocumentData>
  if (constraint) {
    q = query(
      col,
      where(constraint.fieldPath, constraint.opStr, constraint.value)
    )
  } else {
    q = query(col)
  }

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    response[doc.id] = doc.data() as T
  })
  return response
}
