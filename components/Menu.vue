<template>
    <div class="nav-bar">
        <nuxt-link to="/learn" class="menu">Learn</nuxt-link>
        <nuxt-link to="/repair" class="menu">Repair</nuxt-link>
        <nuxt-link to="/resize" class="menu">Resize</nuxt-link>
        <nuxt-link to="/reshape" class="menu">Reshape</nuxt-link>
        <nuxt-link to="/refresh" class="menu">Refresh</nuxt-link>
        <nuxt-link to="/retune" class="menu">Retune</nuxt-link>
        <nuxt-link to="/recycle" class="menu">Recycle</nuxt-link>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    active: String
  }
})
</script>

<style>
.nav-bar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid  #34495e  ;
}
.menu {
    width: 100%;
    padding: 10px 0px 10px 0px;
    text-align: center;
    font-size: 1em;
    text-decoration: none;
    color:  #34495e ;
}
.menu:hover { background-color: #f8f9f9; color: #58d68d; }
</style>
