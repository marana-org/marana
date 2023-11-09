<script lang="ts">
	import { navigating } from '$app/stores';
	import type { PageData } from './$types';
	import { blur } from 'svelte/transition';
	import NProgress from 'nprogress';
	import '../styles/globals.css';
	import '../styles/full-page.css';
	import '../styles/progress.css';
	import '@fontsource/inter';
	import 'normalize.css';

	export let data: PageData;

	NProgress.configure({
		showSpinner: false,
		minimum: 0.1,
		easing: 'linear',
		speed: 500,
		parent: 'div[data-nprogress]'
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

{#key data.url}
	<div class="container full">
		<div
			class="full animation {navigating ? 'navigating' : ''}"
			in:blur={{ duration: 300, delay: 300, amount: 5 }}
			out:blur={{ duration: 300 }}
		>
			<slot />
		</div>
	</div>
{/key}

<style>
	.container {
		background-color: #50e3c2;
		background-image: radial-gradient(at 47% 33%, rgb(23, 181, 133) 0, transparent 59%),
			radial-gradient(at 82% 65%, rgb(102, 0, 255) 0, transparent 55%);
	}
</style>
