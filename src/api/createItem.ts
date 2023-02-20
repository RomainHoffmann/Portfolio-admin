import {addDoc, CollectionReference, DocumentData} from 'firebase/firestore';

export const createItem = async <T>(
  col: CollectionReference,
  item: DocumentData,
): Promise<string | undefined> => {
  try {
    return (await addDoc(col, {...item})).id;
  } catch (error) {
    console.log(error);
  }
};
