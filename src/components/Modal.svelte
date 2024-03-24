<script lang="ts">
	import { showHTPModal } from './ModalStores';
	export let title:string = 'title'
	export let img_path:string = './favicon.png'


	function hideModal() {
		showHTPModal.set(false);
	}
</script>

<div class="absolute left-0 top-0 flex h-full w-full justify-center backdrop-brightness-[0.2]">
	
	<div class="relative top-14 flex max-w-[460px] h-max flex-col items-center border border-neutral-500 bg-normal">
		<div class="flex w-full items-center justify-center bg-normal px-5 pt-5">
			<span class="flex-1">
				<p class="relative ml-11 text-center text-sm font-semibold tracking-[0.2em] text-neutral-400">
					{title}
				</p>
			</span>
			<button class="flex-none justify-self-end p-3" on:click={hideModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 22 22"
					width="20"
					height="20"
					class="stroke-neutral-600 stroke-[3]"
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
			<div class="mb-6 flex items-center">
				<img src="{img_path}" alt="" class="h-7 w-7 mr-4">
				<div class="tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</div>
			</div>
			<div class="mb-6 flex items-center">
				<img src="{img_path}" alt="" class="h-7 w-7 mr-4">
				<div class="tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</div>
			</div>
			<div class="mb-6 flex items-center">
				<img src="{img_path}" alt="" class="h-7 w-7 mr-4">
				<div class="tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa.</div>
			</div>

			<slot name="footer"/>
			<button class="bg-green-500 p-2 text-sm font-semibold tracking-wider text-normal " on:click={hideModal}>
				PLAY
			</button>
		</div>
	</div>
</div>
