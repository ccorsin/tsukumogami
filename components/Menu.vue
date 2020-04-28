<template>
    <div class="nav-bar">
      <div v-for="category in menu" :key="category.title">
        <nuxt-link :to="'/'+category.title.toLowerCase()" class="menu">{{ category.title }}</nuxt-link>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Submenu from '~/components/Submenu.vue'

export default Vue.extend({
  components: {
    Submenu
  },
  props: {
    menu: Array
  }
})
</script>

<style>
.nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    background-color: white;
    border-bottom: 1px solid  #34495e;
}
.menu {
    width: 100%;
    text-align: center;
    font-size: 1em;
    text-decoration: none;
    color:  #34495e ;
}
.menu:hover { background-color: #f8f9f9; color: #58d68d; }
</style>
