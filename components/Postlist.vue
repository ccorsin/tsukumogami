<template>
    <div class="page">
        <div class="index-post" v-for="(post, index) in PostList" :key="index">
            <div class="index">
                <nuxt-link class="button" :to="PostLink(post.id)">Read</nuxt-link>
                <h1 class="title">{{ post.title }}</h1>
                <i class="title">{{ post.subcategory }}  - {{ date(post.updatedDate) }}</i>
                <div class="preview">{{ post.preview }}</div>
            </div>
            <img class="index-img" :src="`${post.imageURL}`"/>
         </div>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment';

export default Vue.extend({
    props: {
        PostList: {
            type: Array,
        }
    },
    methods: {
        PostLink (id) {
            return "/" + id
        },
        date: function(date) {
            return moment(date).format('MMMM YYYY')
        }
    }
})
</script>

<style>
.page {
  width: 100%;
  text-align: left;
}
.index {
    width: 50%;
    background-color: white;
    margin: 20px 0px 20px 20px;
}
.preview {
    margin: 20px 40px 20px 40px;
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