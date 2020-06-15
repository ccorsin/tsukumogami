<template>
    <div class="nav-bar">
      <button v-for="(value, name) in menu" :key="name" class="menu" v-bind:class="{'active':(active === name)}" @click="selectCategory(name)">{{ name }}</button>
      <nuxt-link class="menu" to="/tumblr">Get inspired</nuxt-link>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    menu () {
      return this.$store.state.menu
    },
    active () {
      return this.$store.state.current.category
    }
  },
  methods: {
    selectCategory(category) {
      this.$store.dispatch("selectCategory", category).then(() => {
        this.$router.push("/");
      });
    }
  }
})
</script>

<style>
</style>
