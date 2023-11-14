<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { Button, TextBlock } from 'fluent-svelte';
	import { CloudCog, Coins, Paintbrush } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<section class="home">
		<div class="center text-only">
			<TextBlock variant="display">The LMS for the future</TextBlock>
		</div>
		<div class=" center text-only with-flex column">
			<TextBlock variant="body">Coming soon...</TextBlock>
			<div class="with-flex row center horizontally">
				<Button variant="accent">Sign Up</Button>
				<Button variant="standard">Learn More</Button>
			</div>
		</div>
		<div class=" carousel with-flex row">
			<Card>
				<CloudCog size="64" />
				<TextBlock variant="title">AI-powered</TextBlock>
				<TextBlock>
					<p class="text">
						Marana uses AI technology to help teachers grade faster, prevent students from cheating,
						and support a healthy, productive learning environment
					</p>
				</TextBlock>
			</Card>
			<Card>
				<Paintbrush size="64" />
				<TextBlock variant="title">Customizable</TextBlock>
				<TextBlock>
					<p class="text">
						Marana is designed to be flexible and customizable to fit your disctrict's needs. It's
						designed around you, not the other way around
					</p>
				</TextBlock>
			</Card>
			<Card>
				<Coins size="64" />
				<TextBlock variant="title">Cost-effective</TextBlock>
				<TextBlock>
					<p class="text">
						Marana is affordable for any school district, no matter the size. We offer a variety of
						payment options for disctricts of all sizes and budgets.
					</p>
				</TextBlock>
			</Card>
		</div>
	</section>
</main>

<style>
	:global(.card) {
		width: 25%;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.carousel {
		margin-top: 1rem;
		justify-content: space-around;
	}

	.typing {
		width: 73ch;
		height: fit-content;
		animation: typing 2s steps(36) 1s 1 normal both,
			blink-caret 0.75s infinite cubic-bezier(0, 1, 1, 1);
		border-right: 3px solid;
		white-space: wrap;
		overflow: hidden;
		text-align: center;
	}

	.display-after-typing {
		opacity: 0;
		animation: fade-in-from-bottom 1s 3.5s 1 normal both;
	}

	.text {
		text-wrap: normal;
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: white;
		}
	}

	@keyframes fade-in-from-bottom {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media screen and (max-width: 768px) {
		.typing {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 50%;
			animation: none;
			border: none;
		}

		.display-after-typing {
			opacity: 1;
			animation: none;
		}

		.carousel {
			flex-direction: column;
			align-items: center !important;
		}

		:global(.card) {
			width: 50%;
		}
	}
</style>
