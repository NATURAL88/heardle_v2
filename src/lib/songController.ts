import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export type guessCount = 0 | 1 | 2 | 3 | 4 | 5;
declare var SC: any;

export const position = writable(0);

export class Controller {
	widget: typeof SC.Widget;
	position: number;

	constructor(iframe: HTMLIFrameElement | null) {
		this.widget = SC.Widget(iframe);
		this.position = 0;
	}

	private update_postion(p: number) {
		this.position = p;
		position.set(p);
	}

	async positionUpdater() {
		let interval = setInterval(() => {
			this.widget.getPosition((p: number) => {
				p = Math.ceil(p);
				this.update_postion(p);
			});
		}, 1);
	}

	start() {
		this.widget.setVolume(0);
		this.widget.play();
		this.widget.pause();
		this.widget.setVolume(100); // TODO maybe cookie for prev value
	}

	play() {
		this.widget.seekTo(0);
		this.widget.play();
	}

	pause() {
		this.widget.setVolume(0);
		this.widget.pause();

		// Delay to prevent the sound from playing after the pause
		setTimeout(() => {
			this.update_postion(0);
			this.widget.seekTo(0);
			this.widget.setVolume(100);
		}, 100);
	}

	timeToWait(n: guessCount) {
		let sum = 1000;
		for (let i = 1; i <= n; i++) {
			sum += i * 1000;
		}
		return sum;
	}

	async playFor(guesses: guessCount): Promise<void> {
		return new Promise<void>((resolve) => {
			this.play();
			setTimeout(() => {
				this.pause();
				resolve();
			}, this.timeToWait(guesses));
		});
	}
}
