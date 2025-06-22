<script context="module">
  export async function load({ params }) {
    const res = await fetch(`/api/goal/${params.id}`);
    const data = await res.json();
    return { props: { goal: data } };
  }
</script>

<script>
  export let goal;
  import { updateGoal } from '$lib/goals';
  import { goto } from '$app/navigation';

  let title = goal.title;
  let description = goal.description;

  const save = async () => {
    await updateGoal(goal.id, { title, description });
    goto('/dashboard');
  };
</script>

<h1>Edit Goal</h1>
<input bind:value={title} />
<textarea bind:value={description}></textarea>
<button on:click={save}>Save</button>
