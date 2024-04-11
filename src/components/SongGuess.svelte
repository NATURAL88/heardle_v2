<script lang="ts">
	import type { guessState } from "../app";
	let count = 10;

	export let state: guessState;
</script>

<div class="flex h-9 items-center border border-neutral-500 p-2">
	{#if state === 'nuetral'}
		<div />
	{:else if state === 'wrong'}
		<img src="./x-mark.svg" alt="wrong" class="h-4" />
	{:else if state === 'half-wrong'}
		<img src="./yellow-x-mark.svg" alt="half wrong" class="h-4" />
	{:else if state === 'skipped'}
		<img src="./skipped.svg" alt="skipped" class="h-4" />
	{/if}
</div>
