<template> 
  <div>
    <button class="header" @click="selectCategory()">
        <h1 class="title">Tsukumogami</h1>
        <h1 class="title"><a class="subtitle">Start a</a>
        <a class="highlight subtitle"> long term </a>
        <a class="subtitle"> relationship with your garments.</a></h1>
    </button>
    <Menu />
      <Submenu v-if="selected" :submenu="menu[selected]" />
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '~/components/Menu.vue'
import Submenu from '~/components/Submenu.vue'

export default Vue.extend({
  components: {
    Menu,
    Submenu
  },
  methods: {
    selectCategory() {
      this.$store.dispatch("selectCategory", "").then(() => {
        this.$router.push("/");
      });
    }
  },
  computed: {
    menu () {
      return this.$store.state.menu
    },
    selected () {
      return this.$store.state.current.category
    }
  }
})
</script>

<style>
.header {
  width: 100%;
  text-align: left;
  text-decoration: none;
  border: none;
  font-size: 1em;
}
.subtitle {
  font-size: 0.8em;
}
</style>