<template>
  <div>
    <h2>YouTube API</h2>
    <youtube-search @search="search"></youtube-search>
    <youtube-search-result :videos="videos" @selectVideo="selectVideo"></youtube-search-result>
  </div>
</template>

<script>
import YoutubeSearch from '@/components/youtube/YoutubeSearch.vue';
import YoutubeSearchResult from '@/components/youtube/YoutubeSearchResult.vue';
import axios from 'axios';

export default {
    name: 'YoutubeView',
    data() {
        return {
            videos: [],
            video: null,
        }
    },
    components: {
        YoutubeSearch,
        YoutubeSearchResult,
    },
    methods: {
        search(keyword) {
            const API_URL = "https://www.googleapis.com/youtube/v3/search";
            const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
            axios({
                url: API_URL,
                method: 'GET',
                params: {
                    key: API_KEY,
                    part: 'snippet',
                    q: keyword,
                    type: 'video',
                    maxResult: 20,
                }
            })
            .then((res) => {
                console.log(res.data);
                this.videos = res.data.items; 
                console.log(this.videos);
            })
            .catch((err) => {
                console.log(err);
            });
        },
        selectVideo(video) {
            this.video = video;
        }
    }
}
</script>

<style>

</style>