<template>
  <div class="container">
      <div class="pages">
        <h1>About</h1>
        <div class="text">{{text1}}</div>
        <div class="text">{{text2}}</div>
        <div class="text">{{text3}}
            <a class="link" :href="link">Tsukumogami</a>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    data: function() {
        return {
            text1: "This website is made to be collaborative. You can add and edit techniques if you want to.",
            text2: "This website intends to reduce its ecological footprint, using as few resources as possible.",
            text3: "You can also check for my projet on github :",
            link: process.env.githubProject
        }
    }
};
</script>

<style>
.pages {
    text-align: left;
    margin: 0px 30px 0px 30px;
}
.text {
    margin-top: 20px;
}
.link {
    text-decoration: none;
    color:  #CCCC33;
}
</style>