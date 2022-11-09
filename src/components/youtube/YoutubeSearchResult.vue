<template>
    <div>
        <h3>검색 결과</h3>
        <ul>
            <youtube-video-item v-for="video in videos" :video="video" :key="video.id.videoId"></youtube-video-item>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import YoutubeVideoItem from './YoutubeVideoItem.vue';
export default {
    name: 'YoutubeSearcheResult',
    components: {
        YoutubeVideoItem,
    },
    computed: {
        ...mapState([
            'videos',
        ])
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>