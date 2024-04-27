<script>
	import Header from "$lib/components/Header.svelte";
</script>

<Header />
<main>
	<slot />
</main>
<footer></footer>

<style>
	main {
		margin-top: 60px;
	}
</style>
