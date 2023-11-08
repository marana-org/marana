<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { GithubIcon, ExternalLinkIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Marana LMS</title>
	<meta name="description" content="Marana LMS" />
	<meta name="keywords" content="Marana, LMS, Learning, Management, System" />
	<meta name="robots" content="index, nofollow" />
</svelte:head>

<div class="page full">
	<Card title="Marana">
		<p>The LMS for the future</p>
		<a href="https://github.com/marana-org/marana" target="_blank" rel="noopener noreferrer">
			<div class="button center all with-flex">
				<GithubIcon size="24" />
				<span>View on GitHub</span>
			</div>
		</a>
		<a href="https://yummy-gas-31b.notion.site/The-Core-3ce62af357604beb9b70197a1930b752?pvs=4">
			<div class="button center all with-flex">
				<ExternalLinkIcon size="24" />
				<span>Notion</span>
			</div>
		</a>
	</Card>
</div>

<style>
	.page {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.card {
		backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 12px;
		border: 1px solid rgba(209, 213, 219, 0.3);

		padding: 12px 24px;
	}
	.button {
		border: 1px solid #d1d5db;
		border-radius: 12px;
		backdrop-filter: blur(16px) saturate(250%);
		padding: 12px 24px;

		transition: box-shadow 0.2s linear;
	}

	.button:hover {
		box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
