<template>
  <div class="container">
    <div class="header">
      <h1 class="title">Respect garments</h1>
      <h1 class="title"><a class="subtitle">Start a</a>
      <a class="highlight subtitle"> long term </a>
      <a class="subtitle"> relationship with your garments.</a></h1>
      <Menu />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Menu,
    Footer
  },
  data: {

  }
})
</script>

<style>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: #f8f9f9;
}
.header {
  width: 100%;
  text-align: left;
  margin-top: 20px;
  border-bottom: 1px solid  #34495e  ;
}
.title {
  color: #34495e   ;
  margin-left: 30px;
}
.subtitle {
  color: #34495e   ;
  font-size: 0.8em;
}
.highlight {
  color: #58d68d;
}
</style>
