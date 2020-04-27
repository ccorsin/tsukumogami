<template>
    <div class="nav-bar">
        <nuxt-link to="/learn" class="menu">Learn</nuxt-link>
        <nuxt-link to="/learn" class="menu">Repair</nuxt-link>
        <nuxt-link to="/learn" class="menu">Resize</nuxt-link>
        <nuxt-link to="/learn" class="menu">Reshape</nuxt-link>
        <nuxt-link to="/learn" class="menu">Refresh</nuxt-link>
        <nuxt-link to="/learn" class="menu">Retune</nuxt-link>
        <nuxt-link to="/learn" class="menu">Recycle</nuxt-link>
    </div>
</template>

<script>
export default {
  name: "Menu"
};
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
