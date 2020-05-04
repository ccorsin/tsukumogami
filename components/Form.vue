<template>
    <div class="page">
        <h1 class="title">Add your technique</h1>
        <form @submit.prevent="onSave" class="form">
            <div class="first-part">
                <div class="block title-block">
                    <label class="form-title">Title</label><br />
                    <input class="form-title-field" name="title"  v-model="createdPost.title" /><br />
                    <label class="form-title">Preview</label><br />
                    <input class="form-title-field" name="preview"  v-model="createdPost.preview" /><br />
                </div>
                <div class="block category-block">
                    <label class="form-title">Category</label><br />
                    <div v-for="(category, index) in menu[category]" :key="index" >
                        <input type="radio" :id="category" :value="category" v-model="createdPost.subcategory">
                        <label :for="category">{{ category }}</label>
                    </div>
                    <input type="file" accept="image/*" @change="onFileChanged" id="file-input">
                </div>
            </div>
            <div class="block">
              <label class="form-title">Content</label><br />
              <textarea class="form-cat-field" name="content"  v-model="createdPost.content" />
            </div>
            <input class="form-button" type="submit" value="Submit" />
        </form>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
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
                    preview: "",
                    content: "",
                    category: "",
                    image: null
                }
        }
    },
    computed: {
        menu () {
            return this.$store.state.menu
        },
        category () {
            return this.$store.state.current.category
        }
    },
    methods: {
        onFileChanged (event) {
            this.createdPost.image = event.target.files[0]
        },
        onSave() {
            this.createdPost.category = this.$store.state.current.category
            console.log(this.createdPost)
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
.form {
  margin: 30px 30px 30px 30px;
  color: #34495e;
}
.form-title-field {
    width: 100%;
    border: none;
    align-self: center;
    height: 20px;
}
.form-title {
    margin-bottom: 10px;
}
.first-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px 30px 0px;
    align-items: stretch;
}
.block {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.title-block {
    flex-grow: 2;
    margin-right: 40px;
}
.category-block {
    flex-grow: 1;
    height: 45px;
}
.form-cat-field {
    width: 100%;
    border: none;
    align-self: center;
    height: 300px;
}
.form-button {
    color: #34495e;
    font-size: 1em;
    border: none;
    background-color: #f8f9f9;
    height: 40px;
    width: 90px;
}
.form-button:hover {
    background-color: #58d68d;
    color: #f8f9f9;
}
</style>
