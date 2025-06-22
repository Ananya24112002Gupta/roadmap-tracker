import { db } from './firebase';
import {
  collection, addDoc, getDocs, updateDoc, deleteDoc, doc, Timestamp, query, where
} from 'firebase/firestore';

const goalsRef = collection(db, 'goals');

export const addGoal = async (goal) => {
  return await addDoc(goalsRef, {
    ...goal,
    createdAt: Timestamp.now(),
  });
};

export const getGoals = async (uid) => {
  const q = query(goalsRef, where('uid', '==', uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateGoal = async (id, data) => {
  return await updateDoc(doc(db, 'goals', id), data);
};

export const deleteGoal = async (id) => {
  return await deleteDoc(doc(db, 'goals', id));
};
