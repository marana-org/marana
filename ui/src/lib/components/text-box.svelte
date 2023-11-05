<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let onchange = (value: string) => {};
	export let hidden = false;
	export let name = '';

	function handleChange(event: any) {
		onchange(event.target.value);
		value = event.target.value;
	}
</script>

{#if hidden}
	<input {name} type="password" bind:value on:input={handleChange} {placeholder} />
{:else}
	<input {name} type="text" bind:value on:input={handleChange} {placeholder} />
{/if}

<style>
	input {
		background-color: rgba(255, 255, 255, 0.5);
		border: 1px solid #d1d5db;
		border-radius: 8px;
		padding: 8px 12px;
	}
</style>
