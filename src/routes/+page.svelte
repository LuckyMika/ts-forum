<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		// Clientside javascript runs in here
	});

	async function handleClick() {
		console.log("Todo...");
	}
</script>

<h1>This will be forum trust me bro</h1>
<button on:click={handleClick}>Add "jeff" to the database</button>
