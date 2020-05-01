<template>
    <div class="page">
        <div class="index" v-for="(post, index) in PostList" :key="index">
            <h1 class="title">{{ post.title }}</h1>
            <i class="title">{{ post.subcategory }}</i>
            <div class="preview">{{ post.preview }}</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
        active: String,
        PostList: {
            type: Array,
        }
    }
})
</script>

<style>
.page {
  width: 100%;
  text-align: left;
}
.page > .title {
  color: #34495e   ;
  margin-left: 30px;
  font-size: 1.5em;
}
.index {
    width: 70%;
    background-color: white;
}
.preview {
  color: #34495e;
  margin: 20px 40px 20px 40px;
}
</style>