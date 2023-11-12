<script lang="ts">
	import type { PageData } from './$types';
	import { DateTime } from 'luxon';

	export let data: PageData;

	let page: number | boolean = 0;

	data.class.class_assignments.forEach((assignment: { number: any }, index: number) => {
		assignment.number = index + 1;
	});

	console.log(data);
</script>

<div class="full with-flex column">
	<div
		class="card header{page === 0 ? '' : '-only'} main fixed {page === 0 || false
			? 'current'
			: 'secondary'} with-flex row"
		on:click={() => {
			if (page === 0) page = false;
			else page = 0;
		}}
		on:keypress={() => {
			if (page === 0) page = false;
			else page = 0;
		}}
		role="button"
		aria-label="Go Home"
		tabindex="0"
	>
		<div class="class-home-header with-flex row">
			<h1>{data.class.class_name}</h1>
			<div class="class-details with-flex column">
				<h3>{data.class.class_teacher.name}</h3>
				<h3>
					You and {data.class.class_students.length} other student{data.class.class_students
						.length !== 1
						? 's'
						: ''}
				</h3>
			</div>
		</div>
	</div>

	{#each data.class.class_assignments as assignment}
		<div
			class="card header{page === assignment.number
				? ''
				: '-only'} assignment-view header fixed {page === assignment.number
				? 'current'
				: 'secondary'} assignment-{assignment.number}"
			on:click={() => {
				page = assignment.number;
			}}
			on:keypress={() => {
				page = assignment.number;
			}}
			role="button"
			aria-label="View Assignment"
			tabindex="0"
		>
			<h1><span class="thin">Assignment:</span> {assignment.title}</h1>
		</div>
		{#if page === assignment.number}
			<div class="card assignment-view details">
				{#if assignment.assignedTo === 'readonly'}
					<p>This assignment is for reference only</p>
					<a href="{data.url}/{assignment.id}">
						<div class="button">View Assignment</div>
					</a>
				{:else if assignment.submissions.some((submission) => submission.submittedBy === data.user.userId)}
					<h3>
						You submitted this assignment on {DateTime.fromSeconds(
							assignment.submissions.find(
								(submission) => submission.submittedBy === data.user.userId
							).submittedAt
						).toLocaleString(DateTime.DATETIME_MED)}
					</h3>
					<a
						href="{data.url}/{assignment.id}/{assignment.submissions.find(
							(submission) => submission.submittedBy === data.user.userId
						).id}"
					>
						<div class="button">View Submission</div>
					</a>
				{:else}
					<a href="{data.url}/{assignment.id}/submit">
						<div class="button">Submit Assignment</div>
					</a>
				{/if}
				{#if assignment.description}
					<p>{assignment.description}</p>
				{/if}
			</div>
		{/if}
	{/each}
</div>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	h1,
	h3 {
		margin: 0;
	}

	h1 {
		font-weight: 600;
		font-size: 2em;
	}

	h3 {
		font-weight: 400;
		font-size: 1em;
	}

	span.thin {
		font-weight: 300;
	}

	.column {
		flex-direction: column;
	}

	.row {
		flex-direction: row;
	}

	.card {
		backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(255, 255, 255, 0.75);
		width: 100%;
	}

	.card.assignment-view.details {
		padding: 16px;
		max-height: 80%;
	}

	.card.header {
		border-radius: 12px;
	}

	.card.main {
		border-radius: 12px 12px 0 0;
	}

	.class-home-header {
		padding: 16px;
	}

	.class-details {
		padding-left: 0.5em;
	}

	.main {
		z-index: 1;

		transform: translateY(12px);
	}

	.assignment-view {
		z-index: 2;

		transform: translateY(12px);
		width: 100%;
	}

	.current {
		border-radius: 0 0 0 0 !important;
		border-top: 1px solid rgba(0, 0, 0, 0.25);
	}

	.secondary {
		max-height: 10%;
		border-radius: 0 0 12px 12px;
		border-top: 1px solid rgba(0, 0, 0, 0.25);
	}

	.button {
		border: 1px solid #d1d5db;
		border-radius: 12px;
		backdrop-filter: blur(16px) saturate(250%);
		padding: 12px 24px;
		width: fit-content;

		transition: box-shadow 0.2s linear;
	}

	.button:hover {
		box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
	}
</style>
