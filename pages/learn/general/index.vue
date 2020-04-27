<template>
  <div class="container">
    <Header isInner/>
    <h1>GENERAL</h1>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Submenu from '~/components/Submenu.vue'

export default Vue.extend({
  components: {
    Header,
    Submenu,
    Footer
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
</style>