<template>
  <div class="container">
    <Header active="Learn"/>
    <Form active="Learn" @submit="onSubmitted" />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import Header from '~/components/Header.vue'
import Form from '~/components/Form.vue'

export default Vue.extend({
  layout: 'default',
  components: {
    Header,
    Form
  },
  methods:{
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/learn");
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