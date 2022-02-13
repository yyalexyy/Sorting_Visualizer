const YOUTUBE_API_SEARCH = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_API_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';
const API_KEY = process.env.REACT_APP_API_KEY;

const MAX_RESULTS = 20 ;//maximum maxResults is 50
const c_MUSIC = 10;

export const API = async() => {
    return await fetch(`${YOUTUBE_API_SEARCH}?part=snippet,id&type=video&videoCategoryId=${c_MUSIC}&maxResults=${MAX_RESULTS}&key=${API_KEY}`)
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

export const get_statistics = async(items_from_api_search,videos=[]) => {
    // console.log(items_from_api_search);
    var ids = "";
    for (let idx = 0; idx < MAX_RESULTS; idx++) {
        const id = items_from_api_search[idx].id.videoId;
        ids = (idx!==MAX_RESULTS-1) ? ids+id+"," : ids+id;
    }
    // console.log(ids);
    await fetch(`${YOUTUBE_API_VIDEOS}?part=statistics&key=${API_KEY}&id=${ids}`)
    .then(res => res.json())
    .then(
        (result) => {
            // console.log(result);
            for (let idx = 0; idx < result.items.length; idx++) {
                var element = {snippet: items_from_api_search[idx].snippet , statistics: result.items[idx].statistics};
                // console.log(element);
                videos.push(element);
            }
            // console.log(videos);
        },
        (error) => {
            console.log(error);
        }
    )
};