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
</style>
