import { YOUTUBE_API_SEARCH, YOUTUBE_API_VIDEOS, API_KEY } from './constants.js';
import { MAX_RESULTS, MUSIC_CATEGORY } from './constants.js';


export const YOUTUBE_SEARCH = async () => {
    return await fetch(`${YOUTUBE_API_SEARCH}?part=snippet,id&type=video&videoCategoryId=${MUSIC_CATEGORY}&maxResults=${MAX_RESULTS}&key=${API_KEY}`)
        .then(res => res.json())
        .catch((error) => {
            console.log(error);
        })
};

// export const API = async(set_res) => {
//     await fetch(`${YOUTUBE_API_SEARCH}?part=snippet,id&type=video&videoCategoryId=${c_MUSIC}&maxResults=${MAX_RESULTS}&key=${API_KEY}`)
//     .then(res => res.json())
//     .then(
//         async(result) => {
//             var ids = "";
//             for (let idx = 0; idx < MAX_RESULTS; idx++) {
//                 const id = result.items[idx].id.videoId;
//                 ids = (idx!==MAX_RESULTS-1) ? ids+id+"," : ids+id;
//             }
//             await get_statistic(ids);
//             set_res(result.items);
//         },
//         (error) => {
//             console.log(error);
//         }
//     )
// };

export const YOUTUBE_STATS = async (search_items, videos) => {
    var ids = "";
    for (let idx = 0; idx < MAX_RESULTS; idx++) {
        const id = search_items[idx].id.videoId;
        ids = (idx !== MAX_RESULTS - 1) ? ids + id + "," : ids + id;
    }

    await fetch(`${YOUTUBE_API_VIDEOS}?part=statistics&id=${ids}&key=${API_KEY}`)
        .then(res => res.json())
        .then(
            (result) => {
                for (let idx = 0; idx < result.items.length; idx++) {
                    var element = { snippet: search_items[idx].snippet, statistics: result.items[idx].statistics };
                    videos.push(element);
                }

                return videos;
            },
            (error) => {
                console.log(error);
            }
        )
};