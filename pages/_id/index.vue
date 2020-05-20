<template>
  <div class="container">
    <div class="post">
        <img class="header-img" :src="`${post.imageURL}`"/>
        <div class="post-header">
            <nuxt-link class="button" :to="editPost()">Edit</nuxt-link>
            <h1 class="post-title">{{ post.title }}</h1>
            <i class="post-details">{{ post.subcategory }} - {{ date(post.updatedDate) }}</i><br/>
        </div>
        <div v-html="post.content" class="post-content"></div>
        <div class="post-img">
            <img class="show-img" :src="`${post.imageURL}`"/>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
    methods: {
        editPost () {
            this.$store.state.editPost = this.post
            return "/" + this.id + "/edit"
        },
        date: function(date) {
            return moment(date).format('MMMM YYYY')
        }
    },
    asyncData(context) {
        return axios.get(process.env.postDb + context.params.id + '.json')
        .then(res => {
            if (res.data === null) {
                return error()
            }
            else {
                return {
                    id: context.params.id,
                    post: res.data
                }
            }
        })
        .catch(e => context.error({ statusCode: 404, message: 'Page not found' }))
    }
};
</script>

<style>
.post-header {
    margin: 10px 20px 20px 20px;
}
.post-details, .post-content {
    float: left;
}
.post-content {
    margin: 0px 20px 20px 20px;
    word-wrap: anywhere;
    width: 95%;
    text-align: left;
}
.header-img {
    object-fit: cover;
    width: 100%;
    height: 40px;
}
.post-img {
    float: center;
}
</style>