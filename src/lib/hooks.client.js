import { auth } from '$lib/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { user } from '$lib/stores/user.js'; // your Svelte store

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    console.log("✅ Logged in:", firebaseUser.uid);
    user.set(firebaseUser);
  } else {
    console.log("🚫 Logged out");
    user.set(null);
  }
});