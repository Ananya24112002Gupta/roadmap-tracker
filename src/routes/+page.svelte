<script>
  import { goto } from '$app/navigation';
</script>

<h1>🚀 Welcome to Roadmap Tracker</h1>

<button on:click={() => goto('/login')}>
  Login / Signup
</button>

<button on:click={() => goto('/dashboard')}>
  Dashboard
</button>
