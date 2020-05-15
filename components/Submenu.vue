<template>
    <div class="nav-bar">
        <button v-for="(category, index) in submenu" :key="index" class="menu" v-bind:class="{'active':(active === category)}" @click="selectSubcat(category)">{{ category }}</button>
        <nuxt-link :to="'/add'" class="menu"  @click.native="unselectSubcat()">Add technique</nuxt-link>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    submenu: Array
  },
  computed: {
    active () {
      return this.$store.state.current.subcategory
    }
  },
  methods: {
    selectSubcat(category) {
      this.$store.dispatch("selectSubCategory", category).then(() => {
        this.$router.push("/");
      });
    },
    unselectSubcat() {
      this.$store.dispatch("selectSubCategory", "")
    }
  }
})
</script>

<style>
.nav-bar {
    margin-top: 0px;
}
button {
  background-color: white;
}
</style>