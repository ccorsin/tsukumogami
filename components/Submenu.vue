<template>
    <div class="sub-nav-bar">
        <button v-for="(category, index) in submenu" :key="index" class="submenu" v-bind:class="{'active':(active === category)}" @click="selectSubcat(category)">{{ category }}</button>
        <nuxt-link :to="'/add'" class="submenu">Add technique</nuxt-link>
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
    }
  }
})
</script>

<style>
.sub-nav-bar {
    display: flex;
    justify-content: space-between;
    color:  #34495e ;
    background-color: white;
    border-bottom: 1px solid  #34495e;
    margin-top: 0px;
}
button {
  background-color: white;
}
.submenu {
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    text-decoration: none;
    color:  #34495e ;
    padding: 10px 0px 10px 0px;
    border: none;
}
.submenu:hover { background-color: #f8f9f9; color: #58d68d; }
.active {
  background-color: #f8f9f9;
  color: #58d68d;
}
</style>