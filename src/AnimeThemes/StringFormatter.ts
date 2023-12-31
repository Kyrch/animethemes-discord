import { AnimeWithFilter, Artist, Video } from "structs/types/Anime";

import Config from "config/config";

/**
 * Class StringFormatter
 * 
 * @method artistsDescription string
 * @method videoDescription string
 */

export default class StringFormatter {

    /**
     * Format Artists to a string.
     * 
     * @param artists Artist[]
     * 
     * @returns string
     */
    artistsDescription(artists: Artist[]): string {
        let addArtists = "**Artists:** ";

        for (let artist of artists) {
            addArtists += `[${artist.as === null ? artist.name : `${artist.as} (CV: ${artist.name})`}](${Config.ARTIST_URL + artist.slug}), `;
        }

        return addArtists.replace(/,\s$/, '\n').replace(/,\s*([^,]*)$/, ' & $1');
    }

    /**
     * Format Video to a string.
     * 
     * @param video Video
     * 
     * @returns string
     */
    videoDescription(anime: AnimeWithFilter): string {
        const video = anime.video as Video;
        const version = anime.version === null ? '' : `v${anime.version}`;
        const tags = video.tags.length === 0 ? '' : `-${video.tags}`;
        let string = `**Resolution:** ${video.resolution}p\n`;
            string += `**Source:** ${video.source}\n`;
            string += `**Overlap:** ${video.overlap}${video.tags.length === 0 ? '' : `\n**Tags:** ${video.tags}`}\n`;
            string += `**Link**: ${Config.ANIME_URL}${anime.slug}/${anime.theme_type}${version}${tags}`;

        return string;
    }
}