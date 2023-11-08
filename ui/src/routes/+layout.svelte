<script lang="ts">
	import '../styles/globals.css';
	import '../styles/full-page.css';
	import '@fontsource/inter';
	import 'normalize.css';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="container full">
	<slot />
</div>

<style>
	.container {
		background-color: #50e3c2;
		background-image: radial-gradient(at 47% 33%, rgb(23, 181, 133) 0, transparent 59%),
			radial-gradient(at 82% 65%, rgb(102, 0, 255) 0, transparent 55%);
	}
</style>
