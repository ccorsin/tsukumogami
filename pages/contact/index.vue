<template>
  <div class="container">
      <div class="pages">
        <h1>Contact</h1>
        <div class="text">{{text1}}
            <a class="link" :href="'mailto:'+ mail">{{mail}}</a>
        </div>
        <div class="text">{{text2}}
            <a class="link" :href="link">Github</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            text1: "Feel free to contact me if you want to discuss textiles or lowtech :",
            text2: "And my github account : ",
            mail: process.env.mail,
            link: process.env.github
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