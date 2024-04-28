<script lang="ts">
	import { onMount } from "svelte";
	import notification_store from "$lib/stores/notification_store";

	let element: HTMLDivElement;

	onMount(() => {
		addEventListener("click", handleClick);

		console.log("Mounted!");

		return () => removeEventListener("click", handleClick);
	});

	let first = true;

	function handleClick(event: MouseEvent) {
		if (!element) return;
		if (first) {
			first = false;
			return;
		}

		let rectangle = element.getBoundingClientRect();
		const clickX = event.clientX;
		const clickY = event.clientY;

		const insideRectangle =
			clickX >= rectangle.x &&
			clickX <= rectangle.x + rectangle.width &&
			clickY >= rectangle.y &&
			clickY <= rectangle.y + rectangle.height;

		if (!insideRectangle) {
			let old_store = $notification_store;

			notification_store.set({ ...old_store, open: false });
		}
	}
</script>

<div class="notification" bind:this={element}>
	<h3>Notifications</h3>
	<div class="notifications-container">
		{#if $notification_store.notifications.length > 0}
			<!-- notifications here -->
		{:else}
			You have no new notifications!
		{/if}
	</div>
	<div class="actions-container">
		<a href="/profile/notifications">Show all</a>
		<span>|</span>
		<button>Mark all as read</button>
	</div>
</div>

<style>
	.notification {
		position: absolute;
		min-height: 100px;
		width: 200px;
		background-color: #161616;
		top: 60px;
		right: calc(0 - 60%);

		border-radius: 3px;
		border: 1px solid #2b2b2b;

		overflow: visible;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		box-shadow: 0px 0px 40px 0px #d9d9d920;
	}

	.notification > * {
		padding: 5px;
	}

	h3 {
		border-bottom: 1px solid #2b2b2b;
	}

	.actions-container {
		border-top: 1px solid #2b2b2b;
	}

	.actions-container > * {
		text-decoration: none;
		color: #f0f0f0;
		background-color: #00000000;
		border: none;
		font-size: 0.7em;
	}
</style>
