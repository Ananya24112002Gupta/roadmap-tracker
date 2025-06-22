<script>
  import { addGoal } from '$lib/goalService';
  import { auth } from '$lib/firebase';
  import { goto } from '$app/navigation';

  let title = '';
  let description = '';
  let milestonesText = ''; // comma-separated

  async function createGoal() {
    const user = auth.currentUser;
    if (!user) {
      alert('You must be logged in');
      return;
    }

    const milestones = milestonesText.split(',').map(m => ({
      title: m.trim(),
      completed: false
    }));

    const newGoal = {
      title,
      description,
      status: 'not-started',
      userId: user.uid,
      milestones
    };

    await addGoal(newGoal);
    goto('/dashboard');
  }
</script>

<h1>New Goal</h1>

<input bind:value={title} placeholder="Goal Title" />
<br />
<textarea bind:value={description} placeholder="Description" >
</textarea >

<br />
<input bind:value={milestonesText} placeholder="Milestones (comma-separated)" />
<br />
<button on:click={createGoal}>Save Goal</button>
