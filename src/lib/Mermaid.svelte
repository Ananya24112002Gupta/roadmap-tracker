<script>
  import { onMount } from 'svelte';
  import mermaid from 'mermaid';

  export let diagram = ''; // Diagram code will be passed as a prop

  let chartDiv;

  onMount(() => {
    mermaid.initialize({ startOnLoad: false });

    // Render the diagram inside the div
    mermaid.render('theDiagram', diagram).then(({ svg }) => {
      chartDiv.innerHTML = svg;
    });
  });
</script>

<!-- This div will display the rendered SVG -->
<div bind:this={chartDiv} class="mermaid-container" />