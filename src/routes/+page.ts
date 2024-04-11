import type { PageLoad } from "./$types";

async function getOembed(url: string): Promise<Response> {
    const resUrl = new URL('https://soundcloud.com/oembed');

    let response = fetch(`${resUrl}?url=${url}`)

    return response
}


export const load: PageLoad = async ({ params }) => {
    const oEmbedEndpoint: string = 'https://soundcloud.com/oembed'
    const soundcloudSongUrl: string = 'https://soundcloud.com/black-eyed-peas-official/meet-me-halfway-album-version'
    const embedHTML = await fetch(`${oEmbedEndpoint}?url=${soundcloudSongUrl}`)
        .then(r => r.text())

    return { embedHTML }
}