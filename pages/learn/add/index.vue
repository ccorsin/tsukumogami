<template>
  <div class="container">
    <Header active="Learn"/>
    <Form active="Learn" @submit="onSubmitted" />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import Header from '~/components/Header.vue'
import Form from '~/components/Form.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Form,
    Footer
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
  justify-content: space-between;
  text-align: center;
  background-color: #f8f9f9;
}
</style>