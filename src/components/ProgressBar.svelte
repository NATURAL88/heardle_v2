<script lang="ts">
	import { position } from '$lib/songController';

	let elapsed: Date;
	let time: string;

	$: elapsed = new Date($position);
	$: time = `${elapsed.getMinutes().toString().padStart(2, '0')}:${elapsed
		.getSeconds()
		.toString()
		.padStart(2, '0')}`;

	let guesses = 0;

	function increment() {
		guesses += 1;
		if (guesses > 5) {
			guesses = 5;
		}
	}

	function play() {
		widget.playFor(guesses);
	}
</script>

<span class="flex flex-col items-center p-1">
	<div class="flex h-3 w-full justify-center gap-[1px] border-y border-neutral-400">
		<!-- Progress Bar -->
		<div class="w-full max-w-xl bg-neutral-600">
			<!-- TODO -->
		</div>
	</div>

	<div class="m-1 flex h-12 w-full max-w-xl items-center justify-between">
		<div>{time}</div>
		<button
			on:click={play}
			class="flex h-12 w-12 max-w-xl items-center justify-center rounded-[50%] border-2 border-white"
		>
			<img src="./play-button.svg" alt="play button" class="h-6 pl-2" />
		</button>
		<div>16:00</div>
	</div>
	<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque?</div>
	<div class="m-1 flex h-12 w-full max-w-xl items-center justify-between">
		<button on:click={increment} class="border border-white">increment +{guesses + 1}s</button>
		<button>Submit</button>
	</div>
</span>
