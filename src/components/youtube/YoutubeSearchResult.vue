<template>
    <div>
        <h3>검색 결과</h3>
        <ul>
            <youtube-video-item v-for="video in videos" :video="video" :key="video.id.videoId" @selectVideo="selectVideo"></youtube-video-item>
        </ul>
    </div>
</template>

<script>
import YoutubeVideoItem from './YoutubeVideoItem.vue';
export default {
    name: 'YoutubeSearcheResult',
    components: {
        YoutubeVideoItem,
    },
    props: {
        videos: {
            type: Array,
            required: true,
        },
    },
    methods: {
        selectVideo(video) {
            this.$emit('selectVideo', video);
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>