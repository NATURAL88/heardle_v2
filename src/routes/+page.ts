import { stringify } from 'postcss';
import type { PageLoad } from './$types';
import type { Controller } from '$lib/songController';

declare global {
	var widget: Controller;
}

// async function getOembed(url: string): Promise<Response> {
// 	const resUrl = new URL('https://soundcloud.com/oembed');

// 	let response = fetch(`${resUrl}?url=${url}`);

// 	return response;
// }

export const load: PageLoad = async ({ fetch, params }) => {
	// SOUNDCLOUD RELATED
	// // console.log(params)
	// const oEmbedEndpoint: string = 'https://soundcloud.com/oembed';
	// const soundcloudSongUrl: string =
	// 	'https://soundcloud.com/black-eyed-peas-official/meet-me-halfway-album-version';
	// const oEmbedJSON: JSON = await fetch(`${oEmbedEndpoint}?url=${soundcloudSongUrl}`).then((r) =>
	// 	r.json()
	// );
	// return { oEmbedJSON };
	// SPOTIFY
	// var client_id = '';
	// var client_secret = '';
	// let token = fetch('https://accounts.spotify.com/api/token', {
	// 	method: 'POST',
	// 	body: new URLSearchParams({
	// 		grant_type: 'client_credentials',
	// 		client_id: client_id,
	// 		client_secret: client_secret
	// 	})
	// })
	// 	.then((r) => r.json())
	// 	.then((r) => r.access_token);
	// return { token };
};
