<script lang="ts">
	export let name: string;
	export let icon: string;
	export let last_thread: {
		id: string;
		title: string;
		author: { id: number; username: string };
	};
</script>

<div class="forum container">
	<div class="forum-info container">
		<i class="fas fa-solid {icon} fa-3x" style="color: #a5a5a5;"
		></i>
		<h3 class="forum-title">{name}</h3>
	</div>
	<div class="user container">
		<img
			src="/images/profiles/{last_thread.author.id}.jpg"
			alt="{last_thread.author.username}'s profile"
		/>
		<span class="username">{last_thread.author.username}</span>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.forum-info {
		display: flex;
		flex-wrap: nowrap;
	}

	.forum {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	.username {
		color: #ef0000;
		font-size: 1.5em;
	}

	.user {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	img {
		border-radius: 35%;
	}

	.forum * {
		padding: 7px;
	}
</style>
