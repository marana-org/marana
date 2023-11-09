<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data.classes.classes);
</script>

<div class="full center all with-flex justify">
	{#each data.classes.classes as managedClass}
		<a href={`/${managedClass.class_id}`}>
			<Card>
				<div class="card-items">
					<h1>{managedClass.class_name}</h1>
					<p>{managedClass.class_teacher.name}</p>
					<div class="card-details">
						<p>
							You and {managedClass.class_students.length} other student{managedClass.class_students
								.length !== 1
								? 's'
								: ''}
						</p>
						<p>
							This class has {managedClass.class_assignments.length || 'no'} assignment{managedClass
								.class_assignments.length !== 1
								? 's'
								: ''}
						</p>
					</div>
				</div>
			</Card>
		</a>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	h1 {
		font-size: 1.5rem;
		margin: 0;
	}

	p {
		margin: 0;
	}

	.justify {
		justify-content: space-evenly !important;
	}

	.card-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start !important;
		justify-content: flex-start !important;
	}

	.card-details {
		padding: 1em;
	}

	@media screen and (max-width: 768px) {
		.justify {
			flex-direction: column !important;
		}
	}
</style>
