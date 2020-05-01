<template>
  <div class="container">
    <Header active="Learn"/>
    <Postlist active="Learn" :PostList="loadedPosts"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Postlist from '~/components/Postlist.vue'

export default Vue.extend({
  components: {
    Header,
    Postlist
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedSubcategoryPosts("Learn", "General")
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