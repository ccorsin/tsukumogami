<template>
  <div class="container">
    <Header active="Learn"/>
    <h1>KINTTING</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'

export default Vue.extend({
  layout: 'default',
  components: {
    Header
  }
})
</script>

<style>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f8f9f9;
}
</style>