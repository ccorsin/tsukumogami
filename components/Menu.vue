<template>
    <div class="nav-bar">
        <nuxt-link v-for="category in menu" :key="category.title" class="menu" :to="'/'+category.title.toLowerCase()">{{ category.title }}</nuxt-link>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    menu: Array
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
}
.menu:hover { background-color: #f8f9f9; color: #58d68d; }
</style>
