<script lang="ts">
	export let title: string = '';
</script>

<div class="card">
	{#if title}
		<h1>{title}</h1>
		<div class="divider" />
		<div class="card-content">
			<slot />
		</div>
	{:else if title === ''}
		<slot />
	{/if}
</div>

<style>
	.card {
		backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 12px;
		border: 1px solid rgba(209, 213, 219, 0.3);

		padding: 12px 24px;
	}

	.card-content {
		margin-top: 12px;
	}

	.divider {
		height: 1px;
		background-color: rgba(209, 213, 219, 0.3);
		margin: 12px 0;
	}
</style>
