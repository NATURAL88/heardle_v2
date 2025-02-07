<script lang="ts">
	import { Controller } from '$lib/songController';
	import { onMount } from 'svelte';

	interface Props {
		soundcloudLink: string;
		width?: string;
		showVisual?: boolean;
		height?: string;
		showComments?: boolean;
		autoPlay?: boolean;
		hidden: string | boolean;
	}

	let {
		soundcloudLink,
		width = '100%',
		showVisual = false,
		height = '300',
		showComments = false,
		autoPlay = false,
		hidden
	}: Props = $props();

	var iframe: HTMLIFrameElement | null = $state();

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
></iframe>
