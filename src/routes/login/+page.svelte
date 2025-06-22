<script>
  import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { auth } from '$lib/firebase';
  import { goto } from '$app/navigation';

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    goto('/dashboard');
  };
</script>

<h1>Login / Signup</h1>
<button on:click={login}>Continue with Google</button>
