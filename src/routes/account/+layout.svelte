<script lang="ts">
	import { onMount } from "svelte";

	let container: HTMLDivElement | null = null;

	onMount(assignData);

	function assignData() {
		if (!container) return;

		for (const group of container.children) {
			for (const link of group.children) {
				if (!(link instanceof HTMLAnchorElement))
					continue;

				if (link.pathname == window.location.pathname) {
					link.dataset.selected = "true";
				} else {
					link.dataset.selected = "false";
				}
			}
		}
	}

	function handleClick(event: MouseEvent) {
		if (
			!event.target ||
			!(event.target instanceof HTMLAnchorElement) ||
			!container
		)
			return;

		const element = event.target as HTMLAnchorElement;

		for (const group of container.children) {
			for (const link of group.children) {
				if (link == element) {
					element.dataset.selected = "true";
				} else {
					(link as HTMLElement).dataset.selected =
						"false";
				}
			}
		}
	}
</script>

<div class="layout-container">
	<!-- Jesus fucking christ this is so i dont have to attach a listener to each child object STFU a11y -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="sidebar-container"
		bind:this={container}
		on:click={handleClick}
	>
		<div class="sidebar-group">
			<h4 class="group-title">Public</h4>
			<a href="/account/profile">Your Profile</a>
			<a href="/account/ranks">Your Ranks</a>
		</div>
		<div class="sidebar-group">
			<h4 class="group-title">Settings</h4>
			<a href="/account/details">Account Details</a>
			<a href="/account/privacy">Privacy</a>
		</div>
		<div class="sidebar-group">
			<h4 class="group-title">Security</h4>
			<a href="/account/sessions">Sessions</a>
			<a href="/account/password">Password</a>
			<a href="/account/2fa">Two Factor Authethication</a>
		</div>
	</div>
	<slot />
</div>

<style>
	.layout-container {
		display: flex;
		height: 100%;
	}

	.sidebar-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 130px;
		width: 30%;
		height: 100%;
	}

	.sidebar-group {
		padding: 20px 0;
		border-top: 1px solid #a0a0a0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		max-width: 50%;
	}

	.sidebar-group:first-of-type {
		border: none;
	}

	a {
		color: #f0f0f0;
		text-decoration: none;
		padding: 5px 5px;
		margin: 10px 0;
		border-radius: 5px;
	}

	a:hover {
		background-color: #313131;
	}

	:global(a[data-selected="true"]) {
		background-color: #212121;
		box-shadow: 0 0 5px 0;
	}
</style>
