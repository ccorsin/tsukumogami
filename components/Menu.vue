<template>
    <div class="nav-bar">
        <button v-for="(value, name) in menu" :key="name" class="menu" v-bind:class="{'active':(active === name)}" @click="selectCategory(name)">{{ name }}</button>
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
.nav-bar {
    display: flex;
    justify-content: space-between;
    align-content: stretch;
    background-color: white;
    border-bottom: 1px solid  #34495e;
}
.menu {
    width: 100%;
    text-align: center;
    font-size: 1em;
    text-decoration: none;
    color:  #34495e ;
    padding: 10px 0px 10px 0px;
    border: none;
}
.menu:hover { background-color: #f8f9f9; color: #58d68d; }
.active {
  background-color: #f8f9f9;
  color: #58d68d;
}
</style>
