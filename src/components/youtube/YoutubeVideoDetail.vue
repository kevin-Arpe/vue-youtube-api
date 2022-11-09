<template>
  <div class="detailView" v-if="video">
    <div class="container">
        <iframe width="560" 
            height="315"
            :src="videoURL" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <span class="btnClose" @click="closeDetail">x</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'YoutubeVideoDetail',
    computed: {
        videoURL() {
            const videoId = this.video.id.videoId;
            return `https://www.youtube.com/embed/${videoId}`;
        },
        ...mapState([
            'video',
            'isDetailShow',
        ]),
    },
    methods: {
        closeDetail() {
            console.log(this.$store.state.isDetailShow);
            this.$store.dispatch('closeDetail');
            console.log(this.$store.state.isDetailShow);
        }
    },
}
</script>

<style scoped>
.detailView {
    margin: 20px;
    width: 100%;
    transition: 1s ease;
}

.detailView iframe {
    transition: 0.2s ease;
}

.detailView iframe:hover {
    transform: scale(1.02);
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.btnClose {
    color: red;
    cursor: pointer;
    z-index: 1;
    margin-left: 10px;
    display: inline-block;
    width: 10px;
}

.btnClose:hover {
    font-weight: 600;
}

.HIDDEN {
    display: none;
}
</style>