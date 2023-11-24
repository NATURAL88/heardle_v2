<script lang="ts">
	import HowToPlay from '$components/HowToPlay.svelte';
	import Navbar from '$components/Navbar.svelte';
	import ProgressBar from '$components/ProgressBar.svelte';
    import SongEntry from '$components/SongGuessContainer.svelte';
	import { showHTPModal } from '$components/ModalStores';
</script>

<div class="flex flex-col h-screen">
    {#if $showHTPModal}
        <HowToPlay />
    {/if}

    <Navbar />
    <SongEntry />
    <ProgressBar />
</div>