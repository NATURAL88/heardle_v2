<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	export let token: Promise<string> = '';
	console.log(token);

	window.onSpotifyWebPlaybackSDKReady = () => {
		const player = new window.Spotify.Player({
			name: 'Web Playback SDK',
			getOAuthToken: token,
			volume: 0.5
		});

		setPlayer(player);

		player.addListener('ready', ({ device_id }) => {
			console.log('Ready with Device ID', device_id);
		});

		player.addListener('not_ready', ({ device_id }) => {
			console.log('Device ID has gone offline', device_id);
		});

		player.connect();
	};
</script>

<svelte:head>
	<script src="https://sdk.scdn.co/spotify-player.js"></script>
</svelte:head>
