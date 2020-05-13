<template>
  <div class="container">
    <h1 class="title">Add your technique</h1>
    <Form v-if="category" @submit="onSubmitted" v-bind:isLoading="isLoading" />
    <div v-else class="title-error">Select a category</div>
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
    category () {
        return this.$store.state.current.category
    }
  },
  methods:{
    onSubmitted(postData) {
      this.isLoading = true;
      this.$store.dispatch("addPost", postData).then(() => {
        this.isLoading = false;
        this.$router.push("/");
      });
    }
  }
})
</script>

<style>
</style>