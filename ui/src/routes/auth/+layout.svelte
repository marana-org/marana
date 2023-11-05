<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="container full center all with-flex">
	<div class="card with flex">
		<slot />
	</div>
</div>

<style>
	.container {
		background-color: #50e3c2;
		background-image: radial-gradient(at 47% 33%, rgb(23, 181, 133) 0, transparent 59%),
			radial-gradient(at 82% 65%, rgb(102, 0, 255) 0, transparent 55%);
	}

	.card {
		backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 12px;
		border: 1px solid rgba(209, 213, 219, 0.3);

		padding: 12px 24px;
	}
</style>
