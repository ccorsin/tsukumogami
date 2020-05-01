<template>
    <div class="page">
        <h1 class="title">Add your technique</h1>
        <form @submit.prevent="onSave">
            <label>Title</label><br />
            <input class="form-field" name="title"  v-model="createdPost.title" /><br />
            <label>Category</label><br />
            <div v-for="(category, index) in menu[active]" :key="index" >
                <input type="radio" :id="category" :value="category" v-model="createdPost.subcategory">
                <label :for="category">{{ category }}</label>
            </div><br />
            <label>Content</label><br />
            <input class="form-field" name="content"  v-model="createdPost.content" /><br />
            <input class="form-button" type="submit" value="Submit" />
        </form>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
        active: String,
        post: {
            type: Object,
            required: false
        }
    },
    data: function() {
        return {
            createdPost: this.post 
                ? {...this.post }
                : {
                    title: "",
                    subcategory: [],
                    content: "",
                    category: ""
                }
        }
    },
    computed: {
        menu () {
            return this.$store.state.menu
        }
    },
    methods: {
        onSave() {
            this.createdPost.category = this.active
            this.$emit('submit', this.createdPost)
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
