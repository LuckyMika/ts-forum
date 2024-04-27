<script lang="ts">
</script>

<div class="category-container">
	<h3 class="category-title">Public Forums</h3>
	<hr />
	<div class="forum-container">
		<div class="forum-info-container">
			<i
				class="fas fa-solid fa-comments fa-3x"
				style="color: #a5a5a5;"
			></i>
			<h3 class="forum-title">Chat</h3>
		</div>
		<div class="user-container">
			<img
				src="https://cdn.discordapp.com/avatars/385244650371416070/f06b4c71cab7bfbbb076e04efe8db227.webp?size=80"
				alt="blue's profile"
			/>
			<span class="username">blue</span>
		</div>
	</div>
</div>

<style>
	.category-container {
		border-radius: 10px;
		border: 2px solid #080808;
		margin: 0 auto;
		max-width: 60%;
		background-color: #161616;
	}

	.forum-info-container {
		display: flex;
		flex-wrap: nowrap;
	}

	.category-container *:not(hr) {
		padding: 10px;
	}

	.forum-container {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	.username {
		color: #ef0000;
		font-size: 1.5em;
	}

	.user-container {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	hr {
		border: 1px solid #080808;
	}

	img {
		border-radius: 35%;
	}
</style>
