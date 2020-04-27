<template>
    <div class="sub-nav-bar">
        <nuxt-link to="/learn/general" class="submenu">General</nuxt-link>
        <nuxt-link to="/" class="submenu">Materials</nuxt-link>
        <nuxt-link to="/" class="submenu">Knitting</nuxt-link>
        <nuxt-link to="/" class="submenu">Weaving</nuxt-link>
    </div>
</template>

<script>
export default {
  name: "Submenu"
};
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
    padding: 10px 0px 10px 0px;
    text-align: center;
    font-size: 0.8em;
    text-decoration: none;
    color:  #34495e ;
}
.submenu:hover { background-color: #f8f9f9; color: #58d68d; }
</style>