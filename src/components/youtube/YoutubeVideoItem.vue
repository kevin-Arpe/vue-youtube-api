<template>
  <li @click="selectVideo">
    <img :src="video.snippet.thumbnails.medium.url" alt="thumbnail" />
    <div>
      <span class="title">{{ video.snippet.title }}</span>
      <div class="channelInfo">
        <span>{{ video.snippet.channelTitle }}</span>
        <span>등록일 : {{ video.snippet.publishTime }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
    }
  },
  methods: {
    selectVideo() {
      this.$store.dispatch('selectVideo', this.video);
    }
  }
}
</script>

<style>
  li {
    text-align: left;
    display: flex;
    margin: 10px 0;
  }

  img {
    margin-right: 10px;
    min-width: 320px;
    height: 180px;
  }

  li > div {
    padding: 5px 5px;
  }

  .title {
    margin-bottom: 10px;
    display: inline-block;
  }

  .channelInfo {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    font-weight: 600;
  }
</style>