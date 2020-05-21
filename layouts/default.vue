<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0px 0px 0px 0px;
  overflow-wrap: break-word;
  box-sizing: border-box;
  color:  #000033;
}
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f8f9f9;
}
.header {
  background-color: #f8f9f9;
}
.menu {
    width: 100%;
    text-align: center;
    font-size: 1em;
    text-decoration: none;
    padding: 10px 0px 10px 0px;
    border: none;
    color:  #000033;
}
.menu:hover, .active { 
  background-color: #f8f9f9;
  color: #CCCC33;
}
.nav-bar {
    display: flex;
    justify-content: space-between;
    align-content: stretch;
    background-color: white;
    border-bottom: 1px solid  #000033;
}
.button {
    color: #000033;
    font-size: 1em;
    border: none;
    background-color: #f8f9f9;
    height: 40px;
    width: 90px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    float: right;
}
.button:hover, option, select {
    background-color: #000033;
    color: #f8f9f9;
}
.button:disabled {
    background-color: #bdc3c7 ;
    color: #f8f9f9;
}
.title {
  color: #000033;
  margin-left: 30px;
}
.highlight {
  color: #CCCC33;
}
</style>
