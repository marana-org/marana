<script lang="ts">
	import TextBox from '$lib/components/text-box.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let user: { email: any };
</script>

<div class="form center text-only">
	<form class="center vertically with-flex column" method="post">
		<div class="input">
			<TextBox onchange={(value) => (user.email = value)} placeholder="User ID" name="userid" />
		</div>
		<div class="input">
			<TextBox placeholder="Password" hidden={true} name="password" />
		</div>
		<button class="button">Log In</button>
	</form>
</div>

<style>
	.form {
		padding: 1em;
	}

	.column {
		flex-direction: column;
	}

	.input {
		padding: 0.25em 0;
	}

	.button {
		background-color: #5066e3;
		border-radius: 8px;
		border: none;
		color: #fff;
		padding: 0.5em 1em;
		cursor: pointer;
	}
</style>
