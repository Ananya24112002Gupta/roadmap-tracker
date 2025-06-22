<script>
  import mermaid from 'mermaid';
  import { onMount } from 'svelte';
  export let diagram;

  let container;

  onMount(() => {
    mermaid.initialize({ startOnLoad: false });
    mermaid.render('diagram', diagram, (svgCode) => {
      container.innerHTML = svgCode;
    });
  });
</script>

<div bind:this={container} class="mermaid"></div>