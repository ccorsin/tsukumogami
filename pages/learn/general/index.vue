<template>
  <div class="container">
    <Header active="Learn"/>
    <div v-for="(post, index) in loadedPosts" :key="index">{{ post }}
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts("Learn", "General")
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