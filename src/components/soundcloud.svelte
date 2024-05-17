<script lang="ts">
	import { Controller } from '$lib/songController';
	import { onMount } from 'svelte';

	export let soundcloudLink: string;
	export let width = '100%';
	export let showVisual = false;
	export let height = '300';
	export let showComments = false;
	export let autoPlay = false;
	export let hidden: string | boolean;

	var iframe: HTMLIFrameElement | null;

	onMount(() => {
		iframe = document.querySelector('#scwidget');
		globalThis.widget = new Controller(iframe);
	});
</script>

<svelte:head>
	<script src="https://w.soundcloud.com/player/api.js"></script>
</svelte:head>

<iframe
	class={hidden === 'true' ? 'hidden' : ''}
	bind:this={iframe}
	{width}
	{height}
	title={`soundcloud-${soundcloudLink}`}
	id="scwidget"
	scrolling="false"
	frameborder="0"
	allow="autoplay"
	src="https://w.soundcloud.com/player/?url={soundcloudLink}&visual={showVisual}&show_comments={showComments}&auto_play={autoPlay}"
/>
