<script lang="ts">
	import '../app.css';
	import { showAboutModal, showStatsModal, showHTPModal } from './ModalStores';
	import type { Writable } from 'svelte/store';
</script>

{#snippet navbtn(store: Writable<boolean>, icon: string, alt: string, label: string)}
	<button class="px-3" onclick={() => store.set(true) } aria-label={label}>
		<img src={icon} alt={alt} class="nav-btn" />
	</button>
{/snippet}

<div class="flex h-14 w-full items-center justify-center border-y border-neutral-400">
	<div class="flex w-[48rem] flex-initial flex-row items-center justify-center p-2">
		<a href="https://github.com/NATURAL88/heardle_v2" class="px-3">
			<img src="./github-mark-white.svg" alt="Github repo" class="nav-btn" />
		</a>

		<!-- About button -->
		{@render navbtn(showAboutModal, './info-btn.svg', 'about', 'About')}

		<h1 class="flex-1 text-center font-noto text-3xl font-bold text-white">Heardle</h1>

		<!-- Stats button -->
		{@render navbtn(showStatsModal, './bar-graph.svg', 'statistics', 'Statistics')}

		<!-- How to play button -->
		{@render navbtn(showHTPModal, './question-btn.svg', 'how to play', 'How to play')}
	</div>
</div>
