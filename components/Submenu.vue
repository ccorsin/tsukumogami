<template>
    <div class="sub-nav-bar">
      <div v-for="(category, index) in submenu" :key="index">
        <nuxt-link :to="'/'+active.toLowerCase()+'/'+category.toLowerCase()" exact class="submenu">{{ category }}</nuxt-link>
      </div>
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
    padding: 10px 10px 10px 10px;
}
.submenu {
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    text-decoration: none;
    color:  #34495e ;
}
.submenu:hover { background-color: #f8f9f9; color: #58d68d; }
</style>