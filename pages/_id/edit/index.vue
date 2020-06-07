<template>
  <div class="container">
    <h1 class="title">Edit a technique</h1>
    <Form @submit="onSubmitted" v-bind:isLoading="isLoading" :post="editPost"/>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import Form from '~/components/Form.vue'

export default Vue.extend({
  layout: 'default',
  data: function () {
    return {
      isLoading: false
    }
  },
  components: {
    Form
  },
  computed: {
    editPost () {
      return this.$store.state.editPost
    }
  },
  methods:{
    onSubmitted(postData, imgChanged) {
      this.isLoading = true;
      this.$store.dispatch("editPost", { editedPost: postData, imgChanged }).then(() => {
        this.isLoading = false;
        this.$router.push("/" + postData.id);
      });
    }
  }
})
</script>

<style>
</style>