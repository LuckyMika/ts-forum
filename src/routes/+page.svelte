<script>
	import Forum from "$lib/components/Forum.svelte";
	const categories = [
		{
			title: "Public Forums",
			forums: [
				{
					name: "Chat",
					icon: "fa-comments",
				},
			],
		},
		{
			title: "Private Forums",
			forums: [
				{
					name: "Chat",
					icon: "fa-comments",
				},
			],
		},
		{
			title: "Staff Forums",
			forums: [
				{
					name: "Chat",
					icon: "fa-comments",
				},
			],
		},
	];
</script>

<main>
	<div class="categories container">
		{#each categories as category}
			<div class="category container">
				<h3 class="category-title">{category.title}</h3>
				{#each category.forums as forum}
					<Forum
						name={forum.name}
						icon={forum.icon}
						last_thread={{
							id: "uuid-and-shit",
							title: "Poop",
							author: {
								id: 1,
								username: "Blue",
							},
						}}
					/>
				{/each}
			</div>
		{/each}
	</div>
</main>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.categories {
		flex-direction: column;
		width: 70%;
		margin: 0 auto;
	}

	.category {
		border-radius: 10px;
		border: 1px solid #2b2b2b;
		background-color: #161616;
		flex-direction: column;
		align-items: unset;
		width: 100%;
		margin-top: 20px;
	}

	.category:last-child {
		margin-bottom: 20px;
	}

	.category-title {
		padding: 10px;
		border-bottom: 1px solid #2b2b2b;
	}
</style>
