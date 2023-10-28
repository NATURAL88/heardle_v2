<script lang="ts">
	import SongGuess from './SongGuess.svelte';
	// Flex expands to bottom when bottom bar added
</script>

<div class="mx-auto flex w-full max-w-[600px]  grow-[2] flex-col gap-2 p-2">
	<SongGuess state="wrong" />
	<SongGuess state="nuetral" />
	<SongGuess state="nuetral" />
	<SongGuess state="nuetral" />
	<SongGuess state="nuetral" />
	<SongGuess state="nuetral" />
</div>
