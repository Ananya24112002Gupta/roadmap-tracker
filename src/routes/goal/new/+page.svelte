<script>
  import { db } from '$lib/firebase';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { onMount } from 'svelte';

  let title = '';
  let description = '';
  let dueDate = '';
  let currentUser = null;

  onMount(() => {
    user.subscribe(value => {
      currentUser = value;
    });
  });

  const handleSubmit = async () => {
    if (!title || !dueDate) {
      alert('Please fill in title and due date.');
      return;
    }

    try {
      const goalData = {
        title,
        description,
        dueDate,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        status: 'pending'
      };

      await addDoc(collection(db, 'goals'), goalData);
      alert('✅ Goal saved!');
      goto('/dashboard');
    } catch (err) {
      alert('❌ Error saving goal: ' + err.message);
    }
  };
</script>

<h1 class="text-2xl font-bold mb-4">Add New Learning Goal</h1>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 max-w-md">
  <input type="text" placeholder="Title" bind:value={title} class="border p-2 w-full" required />
  <textarea placeholder="Description" bind:value={description} class="border p-2 w-full"></textarea>
  <input type="date" bind:value={dueDate} class="border p-2 w-full" required />
  
  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Save Goal
  </button>
</form>

