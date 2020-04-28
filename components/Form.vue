<template>
    <div class="page">
        <h1 class="title">Add your technique</h1>
        <form name="add" action="" method="post">
            <label>Title</label>
            <input class="form-field" name="title"  v-model="title" />
            <label>Category</label>
            <div v-for="">
                <input type="checkbox" id="jack" value="Jack" v-model="checkedcategory">
                <label for="jack">{{ }}</label>
            </div>
            <label>Content</label>
            <label>Image</label>
            <input class="form-button" type="submit" value="Submit" />
        </form>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
        active: String
    },
    data: function() {
        return {
        }
    },
    computed: {
        menu () {
        return this.$store.state.menu
        }
    }
})
</script>

<style>
.page {
  width: 100%;
  text-align: left;
}
.page > .title {
  color: #34495e   ;
  margin-left: 30px;
  font-size: 1.5em;
}
</style>
