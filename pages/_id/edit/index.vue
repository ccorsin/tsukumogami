<template>
  <div class="container">
    <h1 class="title">Edit your technique</h1>
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
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f8f9f9;
}
.title-error {
  color: #34495e   ;
  margin: 30px 30px 30px 30px;
  font-size: 1.5em;
}
</style>