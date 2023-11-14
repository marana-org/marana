<script lang="ts">
	let className = '';
	export { className as class };

	let element: HTMLDivElement;

	export const getElement = () => element;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="card {className}"
	on:click
	on:blur
	on:focus
	on:dblclick
	on:contextmenu
	on:mousedown
	on:mouseup
	on:mouseover
	on:mouseout
	on:mouseenter
	on:mouseleave
	on:keypress
	on:keydown
	on:keyup
	bind:this={element}
>
	<slot />
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;

		padding: 12px;

		backdrop-filter: blur(60px) saturate(125%);
		border-radius: var(--fds-overlay-corner-radius);
		background-color: var(--fds-card-background-default);
		border: 1px solid var(--fds-card-stroke-default);
		background-clip: padding-box;
		box-shadow: var(--fds-card-shadow);
		transition: var(--fds-control-normal-duration) var(--fds-control-fast-out-slow-in-easing);
	}

	.card:hover {
		box-shadow: var(--flyout-shadow);
		transform: translateY(-4px);
	}
</style>
