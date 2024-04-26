<script lang="ts">
	import { onMount } from "svelte";
	import db from "$lib/db"

	onMount(() => {
		// Clientside javascript runs in here
	})

	async function handleClick() {
		await db.user.create({
			data: {
				email: "jeff@jeffrey.com",
				username: "Jeff",
			}
		});

		console.log("Creating a user")
	}
</script>

<h1>This will be forum trust me bro</h1>
<button on:click={handleClick} >Add "jeff" to the database</button>
