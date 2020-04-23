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
    color:   #99a3a4 ;
    background-color: white;
    border-bottom: 1px solid  #707b7c ;
    margin: 10px 0px 10px 0px;
}
.menu {
    width: 100%;
    padding: 10px 0px 10px 0px;
    text-align: center;
    font-size: 1em;
}
.menu:hover { background-color: white; }
.menu:hover > .menu-b {  color: #58d68d; }
.menu:hover > .menu-a {  color: #99a3a4; }
</style>
