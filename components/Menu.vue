<template>
    <div class="nav-bar">
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">learn</a></h1>
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">pair</a></h1>
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">size</a></h1>
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">shape</a></h1>
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">fresh</a></h1>
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">tune</a></h1>
        <h1 class="menu"><a class="menu-a">Re</a><a class="menu-b">cycle</a></h1>
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
    color:  #34495e ;
    background-color: white;
    margin: 10px 0px 10px 0px;
}
.menu {
    width: 100%;
    padding: 10px 0px 10px 0px;
    text-align: center;
    font-size: 1em;
}
.menu:hover { background-color: #f8f9f9; }
.menu:hover > .menu-b {  color: #58d68d; }
.menu:hover > .menu-a {  color: #34495e; }
</style>
