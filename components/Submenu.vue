<template>
    <div class="nav-bar">
        <h1 class="submenu"><a class="menu-b">Learn</a></h1>
        <h1 class="submenu"><a class="menu-a">Re</a><a class="menu-b">pair</a></h1>
        <h1 class="submenu"><a class="menu-a">Re</a><a class="menu-b">size</a></h1>
        <h1 class="submenu"><a class="menu-a">Re</a><a class="menu-b">shape</a></h1>
        <h1 class="submenu"><a class="menu-a">Re</a><a class="menu-b">fresh</a></h1>
        <h1 class="submenu"><a class="menu-a">Re</a><a class="menu-b">tune</a></h1>
        <h1 class="submenu"><a class="menu-a">Re</a><a class="menu-b">cycle</a></h1>
    </div>
</template>

<script>
export default {
  name: "Submenu"
};
</script>

<style>
.nav-bar {
    display: flex;
    justify-content: space-between;
    color:  #34495e ;
    background-color: white;
    border-bottom: 1px solid  #34495e  ;
}
.submenu {
    width: 100%;
    padding: 10px 0px 10px 0px;
    text-align: center;
    font-size: 0.8em;
}
.submenu:hover { background-color: #f8f9f9; }
.submenu:hover > .menu-b {  color: #58d68d; }
.submenu:hover > .menu-a {  color: #34495e; }
</style>