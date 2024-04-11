// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type guessState = 'nuetral' | 'wrong' | 'half-wrong' | 'skipped';
type SongContainerArray = [guessState, guessState, guessState, guessState, guessState, guessState]

export {
	guessState,
	SongContainerArray
};
