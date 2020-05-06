<template>
  <div class="container">
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