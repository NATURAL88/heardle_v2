<script lang="ts">
	import SongGuess from './SongGuess.svelte';
	import type { SongContainerArray } from '../app';


	interface Props {
		// Flex expands to bottom when bottom bar added
		guesses: SongContainerArray;
	}

	let { guesses }: Props = $props();
</script>

<div class="mx-auto flex w-full max-w-[600px] grow-[2] flex-col gap-2 p-2">
	{#each guesses as guess}
		<SongGuess state={guess} />
	{/each}
</div>
