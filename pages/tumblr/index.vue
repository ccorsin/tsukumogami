<template>
  <div class="container">
      <div class="pages">
          <Photo/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Photo from '~/components/Photo.vue'

export default Vue.extend({
    components: {
        Photo
    },
    data: function() {
        return {
        }
    }
});
</script>

<style>
.pages {
    text-align: left;
    margin: 0px 30px 0px 30px;
}
</style>