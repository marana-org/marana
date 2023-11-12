<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { DateTime } from 'luxon';
	import type { PageData } from './$types';

	export let data: PageData;
	let assignment: any;
	let submitted: boolean;

	assignment = data.class.class_assignments.find(
		(assignment: { id: string }) => assignment.id === data.assignment
	);
	submitted = assignment.submissions.some(
		(submission: { submittedBy: string }) => submission.submittedBy === data.user.userId
	);
</script>

<Card title="Assignment: {assignment.title}">
	<div class="card-content">
		<p>Due {DateTime.fromSeconds(assignment.due).toRelative()}</p>
		<p>Points: {assignment.points}</p>
		{#if assignment.description}
			<p>From your teacher:</p>
			<p class="description">{assignment.description}</p>
		{/if}
		{#if submitted}
			<a
				href="{data.url}/{assignment.submissions.find(
					(submission) => submission.submittedBy === data.user.userId
				).id}"
			>
				<div class="button">View your submission</div>
			</a>
		{:else}
			<a href="{data.url}/submit">
				<div class="button">Submit this assignment</div>
			</a>
		{/if}
	</div>
</Card>

<style>
	p {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.card-content {
		display: flex;
		flex-direction: column;

		padding: 1rem;
	}

	.description {
		padding: 1rem;
	}

	.button {
		border: 1px solid #d1d5db;
		border-radius: 12px;
		backdrop-filter: blur(16px) saturate(250%);
		padding: 12px 24px;
		margin: 0.5rem 0;
		width: fit-content;

		transition: box-shadow 0.2s linear;
	}

	.button:hover {
		box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
	}
</style>
