<template>
    <div class="nav-bar">
        <div class="menu">About</div>
        <div class="menu">Website</div>
        <div class="menu">Contact</div>
    </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #34495e ;
    background-color: white;
    margin: 10px 0px 0px 0px;
}
.menu {
    width: 100%;
    padding: 10px 0px 10px 0px;
    text-align: center;
}
</style>
