<template>
    <div class="page">
        <div class="index-post" v-for="(post, index) in PostList" :key="index">
            <div class="index">
                <nuxt-link class="button" :to="PostLink(post.id)">Read</nuxt-link>
                <h1 class="title">{{ post.title }}</h1>
                <i class="title">{{ post.subcategory }}</i>
                <div class="preview">{{ post.preview }}</div>
            </div>
            <img class="index-img" :src="`${post.imageURL}`"/>
         </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
        PostList: {
            type: Array,
        }
    },
    methods: {
        PostLink (id) {
            return "/" + id
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
    width: 50%;
    background-color: white;
    margin: 20px 0px 20px 20px;
}
.preview {
  color: #34495e;
  margin: 20px 40px 20px 40px;
}
.button {
    color: #34495e;
    font-size: 1em;
    border: none;
    background-color: #f8f9f9;
    float: right;
    height: 30px;
    width: 90px;
    text-align: center;
    vertical-align: bottom;
    text-decoration: none;
    color:  #34495e ;
}
.button:hover {
    background-color:white;
}
.index-post {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.index-img {
    object-fit: cover;
    width: 30%;
    height: 170px;
    margin: 20px 20px 20px 0px;
}
</style>