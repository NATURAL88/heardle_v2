<script lang="ts">
	import Modal from '$components/Modal.svelte';
	import Navbar from '$components/Navbar.svelte';
	import { browser } from '$app/environment';
	import ProgressBar from '$components/ProgressBar.svelte';
	import SongEntry from '$components/SongGuessContainer.svelte';
	import { showHTPModal, showAboutModal, showStatsModal } from '$components/ModalStores';
	import type { SongContainerArray } from '../app';
	import type { PageData } from './$types.js';
	import Soundcloud from '$components/soundcloud.svelte';
	import { howToPlay_entries } from '$lib/howToPlayEntries';

	let guesses: SongContainerArray = $state([
		'nuetral',
		'nuetral',
		'nuetral',
		'nuetral',
		'nuetral',
		'nuetral'
	]);

	let url = 'https://soundcloud.com/black-eyed-peas-official/meet-me-halfway-album-version';
</script>

<div class="flex h-screen flex-col">
	<Navbar />

	{#if $showHTPModal}
		<Modal title={'HOW TO PLAY'}>
			{#snippet body()}
				<div>
					{#each howToPlay_entries as { svg, text }, index}
						<div class="mb-6 flex items-center">
							<img src={svg} alt="" class="mr-4 size-7" />
							<div class="tracking-wide">
								{text}
							</div>
						</div>
					{/each}
				</div>
			{/snippet}
			{#snippet footer()}
				<button
					class="bg-green-500 px-2 py-[10px] text-sm font-semibold tracking-wider text-normal"
					onclick={() => showHTPModal.set(false)}
				>
					PLAY
				</button>
			{/snippet}
		</Modal>
	{/if}
	{#if $showAboutModal}
		<Modal title="About">
			{#snippet body()}
				<div class="text-center font-noto text-[0.95rem]">
					Each daily Heardle features a clip from a popular song. Guess in as few tries as possible,
					and be sure to come back every day for a new song.
					<br />
					<br />
					Based on Heardle.app which was unfortunately shut down.
					<br />
					<br />
				</div>
			{/snippet}
		</Modal>
	{/if}
	<SongEntry {guesses} />
	<ProgressBar />
	<Soundcloud
		hidden="true"
		soundcloudLink="https://soundcloud.com/black-eyed-peas-official/meet-me-halfway-album-version"
	/>
</div>
