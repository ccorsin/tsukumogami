<template> 
    <div>
        <NuxtLink class="header" to="/">
            <h1 class="title">Tsukumogami</h1>
            <h1 class="title"><a class="subtitle">Start a</a>
            <a class="highlight subtitle"> long term </a>
            <a class="subtitle"> relationship with your garments.</a></h1>
        </NuxtLink>
        <Menu />
        <Submenu v-if="isInner" />
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
  props: {
    isInner: Boolean,
  },
  data: function() {
      return {

      }
  },
  mounted() {
  },
  computed: {},
  methods: {
  }
})
</script>

<style>
.header {
  width: 100%;
  text-align: left;
  margin-top: 20px;
  text-decoration: none;
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