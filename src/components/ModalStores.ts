import { writable } from "svelte/store";
import type { Writable } from "svelte/store"

export const showHTPModal: Writable<boolean> = writable(false);
export const showAboutModal: Writable<boolean> = writable(false);
export const showStatsModal: Writable<boolean> = writable(false);

