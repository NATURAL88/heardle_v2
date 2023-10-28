<script lang="ts">
	type guessState = 'nuetral' | 'wrong' | 'skipped';
	let count = 10;

	export let state: guessState;
</script>

<div class="flex h-9 border border-neutral-500 p-2 items-center">
	{#if state === 'wrong'}
		<img src="./x-mark.svg" alt="red x mark" class="h-4" />
	{/if}
</div>
