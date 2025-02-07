<script lang="ts">
	import { showHTPModal } from './ModalStores';
	import { showAboutModal } from './ModalStores';
	import { showStatsModal } from './ModalStores';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		body?: Snippet;
		footer?: Snippet;
	}

	let { title = 'title', body, footer }: Props = $props();

	function hideModals() {
		showHTPModal.set(false);
		showAboutModal.set(false);
		showStatsModal.set(false);
	}
</script>

<div class="absolute left-0 top-0 flex h-full w-full justify-center backdrop-brightness-[0.2]">
	<div
		class="relative top-14 flex h-max max-w-[460px] flex-col items-center border border-neutral-500 bg-normal"
	>
		<div class="flex w-full items-center justify-center bg-normal px-5 pt-5">
			<p class="flex-1 relative ml-11 text-center text-sm font-semibold tracking-[0.2em] text-neutral-400">
				{title}
			</p>
			<button
				class="flex-none justify-self-end p-3"
				onclick={hideModals}
				aria-label="Close"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 22 22"
					width="20"
					height="20"
					class="stroke-neutral-600 stroke-3"
					stroke-width="2"
					stroke-linejoin="round"
					stroke-linecap="round"
				>
					<line x1="2" x2="18" y1="2" y2="18" />
					<line x1="18" x2="2" y1="2" y2="18" />
				</svg>
			</button>
		</div>

		<div class="flex flex-col items-center p-5">
			{@render body?.()}
			{@render footer?.()}
		</div>
	</div>
</div>
