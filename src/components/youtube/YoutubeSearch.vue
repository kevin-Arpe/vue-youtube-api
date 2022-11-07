<template>
  <div>
    <input type="text" v-model="keyword" placeholder="검색할 영상의 제목을 입력하세요" />
    <button @click="search">검색</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
        }
    },
    methods: {
        search() {
            this.$emit('search', this.keyword);
        },
    }
}
</script>

<style scoped>
    input {
        width: 60%;
        height: 1.6rem;
        margin-right: 10px;
        padding-left: 10px;
    }

    button {
        width: 60px;
        height: 2rem;
    }
</style>