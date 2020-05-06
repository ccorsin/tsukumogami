<template>
  <div class="container">
    <Form @submit="onSubmitted" v-bind:isLoading="isLoading" />
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
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f8f9f9;
}
</style>