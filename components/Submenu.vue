<template>
    <div class="sub-nav-bar">
        <nuxt-link v-for="(category, index) in submenu" :key="index" :to="'/'+active.toLowerCase()+'/'+category.toLowerCase()" exact class="submenu">{{ category }}</nuxt-link>
        <nuxt-link :to="'/'+active.toLowerCase()+'/add'" exact class="submenu">Add technique</nuxt-link>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    submenu: Array,
    active: String
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
.submenu {
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    text-decoration: none;
    color:  #34495e ;
    padding: 10px 0px 10px 0px;
}
.submenu:hover { background-color: #f8f9f9; color: #58d68d; }
</style>