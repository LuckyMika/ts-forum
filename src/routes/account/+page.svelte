<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(() => goto("/account/profile"));
</script>

<h1>Redirecting...</h1>

<style>
	h1 {
		color: #f0f0f0;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
