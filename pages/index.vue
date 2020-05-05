<template>
  <div class="container">
    <Postlist :PostList="loadedPosts"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Postlist from '~/components/Postlist.vue'

export default Vue.extend({
  layout: 'default',
  components: {
    Postlist
  },
  computed: {
    loadedPosts() {
      if (this.$store.state.current.subcategory) {
        return this.$store.getters.loadedSubcategoryPosts(this.$store.state.current.category, this.$store.state.current.subcategory)
      }
      return this.$store.getters.loadedCategoryPosts(this.$store.state.current.category)
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
