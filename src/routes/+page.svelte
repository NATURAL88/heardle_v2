<script lang="ts">
	import Modal from '$components/Modal.svelte';
	import Navbar from '$components/Navbar.svelte';
	import ProgressBar from '$components/ProgressBar.svelte';
	import SongEntry from '$components/SongGuessContainer.svelte';
	import { showHTPModal } from '$components/ModalStores';
</script>

<div class="flex h-screen flex-col">
	{#if $showHTPModal}
		<Modal title={"HOW TO PLAY"}/>
	{/if}

	<Navbar />
	<SongEntry />
	<ProgressBar />
</div>
