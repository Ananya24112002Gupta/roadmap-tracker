<script>
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { getGoals, deleteGoal } from '$lib/goals';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import Mermaid from '$lib/components/Mermaid.svelte';

  let goals = [];
  let currentUser = null;

  onMount(async () => {
    currentUser = get(user);
    if (!currentUser) {
      goto('/login');
      return;
    }

    goals = await getGoals(currentUser.uid);
  });

  const remove = async (id) => {
    await deleteGoal(id);
    goals = await getGoals(currentUser.uid);
  };
</script>

<h1 class="text-2xl font-bold mb-4">🎯 Your Goals Dashboard</h1>

<!-- Add New Goal Button -->
<a href="/goal/new" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4 inline-block">+ Add New Goal</a>

<!-- Goals Loop -->
{#if goals.length > 0}
  {#each goals as goal}
    <div class="p-4 border rounded shadow mb-4 bg-white">
      <h3 class="text-lg font-semibold">{goal.title}</h3>
      <p>{goal.description}</p>
      <div class="flex gap-4 mt-2">
        <a href={`/goal/${goal.id}`} class="text-blue-500 hover:underline">✏️ Edit</a>
        <button class="text-red-500 hover:underline" on:click={() => remove(goal.id)}>🗑️ Delete</button>
      </div>
      <div class="mt-4">
        <Mermaid diagram={`graph TD; Start --> ${goal.title}`} />
      </div>
    </div>
  {/each}
{:else}
  <p>No goals yet. Start by adding one!</p>
{/if}
