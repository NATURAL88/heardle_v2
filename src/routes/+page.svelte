<script lang="ts">
	import Modal from '$components/Modal.svelte';
	import Navbar from '$components/Navbar.svelte';
	import { browser } from '$app/environment';
	import ProgressBar from '$components/ProgressBar.svelte';
	import SongEntry from '$components/SongGuessContainer.svelte';
	import { showHTPModal, showAboutModal, showStatsModal } from '$components/ModalStores';
	import type { SongContainerArray } from '../app';
	import type { PageData } from './$types.js';

	export let data: PageData;

	let howToPlay_entries: Array<{ [key: string]: string }> = [
		{
			svg: './music.svg',
			text: 'Listen to the intro, then find the correct artist & title in the list.'
		},
		{
			svg: './volume-2.svg',
			text: 'Skipped or incorrect attempts unlock more of the intro'
		},
		{
			svg: './thumbs-up.svg',
			text: 'Answer in as few tries as possible and share your score!'
		}
	];

	let guesses: SongContainerArray = [
		'nuetral',
		'nuetral',
		'nuetral',
		'nuetral',
		'nuetral',
		'nuetral'
	];

	let url = 'https://soundcloud.com/black-eyed-peas-official/meet-me-halfway-album-version';
</script>

<div class="flex h-screen flex-col">
	<Navbar />

	{#if $showHTPModal}
		<Modal title={'HOW TO PLAY'}>
			<div slot="body">
				{#each howToPlay_entries as { svg, text }, index}
					<div class="mb-6 flex items-center">
						<img src={svg} alt="" class="mr-4 h-7 w-7" />
						<div class="tracking-wide">
							{text}
						</div>
					</div>
				{/each}
			</div>
			<button
				slot="footer"
				class="bg-green-500 p-2 text-sm font-semibold tracking-wider text-normal"
				on:click={() => showHTPModal.set(false)}
			>
				PLAY
			</button>
		</Modal>
	{/if}
	{#if $showAboutModal}
		<Modal title="About">
			<div slot="body" class="text-center font-noto text-[0.95rem]">
				Each daily Heardle features a clip from a popular song. Guess in as few tries as possible,
				and be sure to come back every day for a new song.
				<br />
				<br />
				Based on Heardle.app which was unfortunately shut down.
				<br />
				<br />
			</div></Modal
		>
	{/if}
	<SongEntry bind:guesses />
	<ProgressBar />
	{data.embedHTML}
</div>
