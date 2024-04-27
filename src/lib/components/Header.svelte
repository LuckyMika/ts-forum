<script>
	import Notification from "./Notification.svelte";
	import notification_store from "./notification_store";

	function handleClick() {
		notification_store.set(!$notification_store);
	}
</script>

<header>
	<div class="navigation">
		<a class="home" href="/" title="Home">
			<i class="fas fa-home"></i>
		</a>
	</div>
	<div class="userarea">
		{#if $notification_store}
			<Notification />
		{/if}
		<button
			class="notifications"
			title="Notifications"
			on:click={handleClick}
		>
			<i class="fas fa-bell"></i>
		</button>
		<a class="profile" href="/profile" title="Profile">
			<i class="fas fa-user"></i>
		</a>
	</div>
</header>

<style>
	header {
		padding: 0;
		margin: 0;
		background-color: #212121;
		height: 60px;
		width: 100%;
		position: fixed;
		top: 0;

		box-shadow: 0px 0px 20px -2px #d9d9d9;

		display: flex;
		justify-content: space-between;
	}

	header > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 20px;
	}

	a,
	button {
		box-sizing: content-box;
		background-color: #00000000;
		color: #8d8d8d;
		width: 40px;
		height: 40px;
		margin: 5px;

		border-radius: 3px;
		border: 1px solid #2b2b2b;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;
	}

	a:hover,
	button:hover {
		color: #a8a8a8;
		border-color: #4b4b4b;
	}

	i {
		font-size: 24px;
	}
</style>
