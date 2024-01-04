<script>
	import '../app.css';

	import { showHTPModal } from './ModalStores';
	import Modal from './Modal.svelte';
	let showModal = false
</script>

<div class="flex h-14 w-full items-center justify-center border-y border-neutral-500">

	<Modal bind:showModal>
		
	</Modal>

	<div class="flex w-[48rem] flex-initial flex-row items-center justify-center p-2">
		<a href="https://github.com/NATURAL88/heardle_v2" class="px-3">
			<img src="./github-mark-white.svg" alt="Github repo" class="nav-btn" />
		</a>
		<!-- About button -->
		<button class="px-3">
			<img src="./info-btn.svg" alt="about" class="nav-btn" />
		</button>
		<h1 class="flex-1 text-center font-noto text-3xl font-bold text-white">Heardle</h1>
		<!-- Stats button -->
		<button class="px-3">
			<img src="./bar-graph.svg" alt="statistics" class="nav-btn" />
		</button>
		<!-- How to play button -->
		<button class="px-3" on:click={() => showHTPModal.set(true)}>
			<img src="./question-btn.svg" alt="how to play" class="nav-btn" />
		</button>
	</div>
</div>
