type guessCount = 0 | 1 | 2 | 3 | 4 | 5;
declare var SC: any;
export class Controller {
	widget: typeof SC.Widget;

	constructor(iframe: HTMLIFrameElement | null) {
		this.widget = SC.Widget(iframe);
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
		this.widget.pause();
		// this.widget.seekTo(0);
	}

	timeToWait(n: guessCount) {
		let sum = 1000;
		for (let i = 1; i <= n; i++) {
			sum += i * 1000;
		}
		return sum;
	}

	playFor(guesses: guessCount) {
		this.play();
		new Promise<void>((resolve) => {
			let interval = setInterval(() => {
				this.widget.getPosition((p: number) => {
					if (p >= this.timeToWait(guesses)) {
						this.pause();
						clearInterval(interval);
						resolve();
						//todo here
					}
				});
			}, 5);
		});
	}
}
