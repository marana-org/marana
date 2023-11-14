<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { Button, TextBlock, TextBox } from 'fluent-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="center all with-flex full">
	<Card>
		<TextBlock variant="title">Login</TextBlock>
		<form class="input" method="POST">
			<TextBox type="text" placeholder="Student ID" name="userid" />
			<TextBox type="password" placeholder="Password" name="password" />
			<div class="action-bar">
				<a href="/auth/login/forgot">
					<Button variant="hyperlink">Forgot password?</Button>
				</a>
				<button type="submit">
					<Button variant="accent">Login</Button>
				</button>
			</div>
		</form>
	</Card>
</main>

<style>
	:global(.text-box-container) {
		margin: 12px 0;
	}

	button {
		background: none;
		border: none;
		padding: 12px;
	}

	.input {
		padding: 12px;
	}

	.action-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>