import { writable } from 'svelte/store';

type guessCount = 0 | 1 | 2 | 3 | 4 | 5;
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
		this.widget.seekTo(0);
		this.update_postion(0);
		this.widget.setVolume(100);
	}

	timeToWait(n: guessCount) {
		let sum = 1000;
		for (let i = 1; i <= n; i++) {
			sum += i * 1000;
		}
		return sum;
	}

	playFor(guesses: guessCount): number {
		this.play();
		new Promise<void>((resolve) => {
			let interval = setInterval(() => {
				this.widget.getPosition((p: number) => {
					p = Math.floor(p);
					this.update_postion(p);
					if (p >= this.timeToWait(guesses)) {
						this.pause();
						clearInterval(interval);
						resolve();
					}
				});
			}, 5);
		});
		return guesses;
	}
}
