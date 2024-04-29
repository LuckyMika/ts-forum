<script>
	import Header from "$lib/components/Header.svelte";
</script>

<Header />
<main>
	<slot />
</main>

<style>
	main {
		margin-top: 60px;
		min-height: calc(100vh - 60px);
	}
</style>
