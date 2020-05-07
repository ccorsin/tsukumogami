<template>
  <div class="container">
    <div class="post">
        <div class="post-header">
            <h1 class="post-title">{{ post.title }}</h1>
            <i class="post-details">{{ post.subcategory }} - {{ date(post.updatedDate) }}</i><br/>
        </div>
        <div class="post-content">{{ post.content }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
    methods: {
        date: function(date) {
            return moment(date).format('MMMM YYYY')
        }
    },
    asyncData(context) {
        return axios.get('https://garments-76648.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
            return {
                post: res.data
            }
        })
        .catch(e => context.error(e))
    }
};
</script>

<style>
.post {
    color:  #34495e ;
}
.post-header {
    margin: 10px 20px 20px 20px;
}
.post-details, .post-content {
    float: left;
}
.post-content {
    margin-left: 20px;
}
</style>