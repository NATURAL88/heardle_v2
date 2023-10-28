<script lang="ts">
	import HowToPlay from '$components/HowToPlay.svelte';
	import Navbar from '$components/Navbar.svelte';
	import ProgressBar from '$components/ProgressBar.svelte';
    import SongEntry from '$components/SongGuessContainer.svelte';
</script>

<div class="flex flex-col h-screen">
    <HowToPlay />
    <Navbar />
    <SongEntry />
    <ProgressBar />
</div>