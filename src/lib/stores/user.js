import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/firebase'; // Adjust path if needed

// This writable store holds the current user
export const user = writable(null);

// Listen to Firebase auth state changes
onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);
});