<template>
    <div class="page">
        <h1 class="title">Add your technique</h1>
        <div v-for="(err, index) in errors" :key="index">
            <div class="error">{{ err }}</div>
        </div>
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
                </div>
                <div class="block filtering">
                    <label class="form-title">Image filtering</label><br />
                    <select v-model="colors">
                        <option v-for="(value, name) in imgcolors" :key="name" :value="value">
                            {{ name }}
                        </option>
                    </select>
                </div>
                <div class="block image-upload">
                    <button class="form-button" @click="onPickFile">Upload Image</button>
                    <input type="file" accept="image/*" ref="fileInput" @change="onFileChange" style="display: none">
                </div>
                <div id="preview" class="image-upload">
                    <img v-if="url" :src="url" class="image-preview"/>
                </div>
            </div>
            <div class="block">
              <label class="form-title">Content</label><br />
              <textarea class="form-cat-field" name="content"  v-model="createdPost.content" />
            </div>
            <input class="form-button" type="submit" value="Submit" :disabled="isLoading"/>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import Canvas from 'canvas';
import RgbQuant from 'rgbquant'

export default Vue.extend({
    props: {
        post: {
            type: Object,
            required: false
        },
        isLoading: Boolean
    },
    data: function() {
        return {
            errors: [],
            createdPost: this.post 
                ? {...this.post }
                : {
                    title: "",
                    subcategory: [],
                    preview: "",
                    content: "",
                    category: "",
                    image: null,
                    src: ""
                },
            url: null,
            colors: [],
            imgcolors: {
                "Original": [],
                "Green monochrome" : [[238, 255, 219], [29, 56, 1]],
                "Red monochrome": [[255, 227, 219], [79, 20, 3]],
                "Blue monochrome": [[219, 249, 255], [2, 71, 79]],
                "Yellow monochrome": [[255, 254, 219], [48, 48, 1]],
                "Black and white": [[255, 255, 255], [0, 0, 0]]
            },
            options: {
                colors: 8,                   // desired palette size
                method: 2,                   // histogram method, 2: min-population threshold within subregions; 1: global top-population
                boxSize: [8,8],              // subregion dims (if method = 2)
                boxPxls: 2,                  // min-population threshold (if method = 2)
                minHueCols: 2000,            // # of colors per hue group to evaluate regardless of counts, to retain low-count hues
                dithKern: 'Atkinson',        // dithering kernel name, see available kernels in docs below
                dithDelta: 0,                // dithering threshhold (0-1) e.g: 0.05 will not dither colors with <= 5% difference
                dithSerp: false,             // enable serpentine pattern dithering
                palette: [],                 // a predefined palette to start with in r,g,b tuple format: [[r,g,b],[r,g,b]...]
                reIndex: false,              // affects predefined palettes only. if true, allows compacting of sparsed palette once target palette size is reached. also enables palette sorting.
                useCache: true,              // enables caching for perf usually, but can reduce perf in some cases, like pre-def palettes
                cacheFreq: 10,               // min color occurance count needed to qualify for caching
                colorDist: "euclidean",      // method used to determine color distance, can also be "manhattan"
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
    watch: {
        colors: function (val) {
            this.options.palette = val
        }
    },
    methods: {
        checkForm() {
            this.errors = []
            if (!this.createdPost.title || this.createdPost.title.length < 3) {
                this.errors.push("Title is required")
            }
            if (!this.createdPost.preview || this.createdPost.preview.length < 3) {
                this.errors.push("Preview is required")
            }
            if (this.createdPost.subcategory.length === 0) {
                this.errors.push("Please select a category")
            }
            if (!this.createdPost.content || this.createdPost.content.length < 250) {
                this.errors.push("Content must be at least of 250 characters")
            }
            if (!this.createdPost.image) {
                this.errors.push("Please upload an image")
            }
            if (this.errors.length > 0) {
                return false
            }
            return true
        },
        onPickFile () {
            this.$refs.fileInput.click()
        },
        onFileChange (event) {
            const files = event.target.files;
            this.createdPost.image = files[0];
            this.createdPost.src = URL.createObjectURL(files[0]);
            this.url = URL.createObjectURL(files[0]);
        },
        ditherImage () {
            const { createCanvas, loadImage } = require('canvas')
            var img = new Image();
            img.onload = this.createdPost.image;
            img.src = this.createdPost.src
            const resize_w = 640;
            const resize_h = (img.height / img.width) * 640
            const canvas = createCanvas(resize_w, resize_h)
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, resize_w, resize_h);
            var q = new RgbQuant(this.options);
            q.sample(canvas);
            var out = q.reduce(canvas);
            const imgData = ctx.getImageData(0, 0, resize_w, resize_h)
            imgData.data.set(out)
            ctx.putImageData(imgData, 0, 0)
            const ditheredImage = canvas.toDataURL()
            fetch(ditheredImage)
                .then(res => res.blob())
                .then(blob => {
                    const fileNew = new File([blob], this.createdPost.image.name, { type: "image/png" })
                    return this.createdPost.image = fileNew
            })
        },
        onSave() {
            if (this.checkForm() === false) {
                return
            }
            this.ditherImage();
            this.createdPost.category = this.$store.state.current.category;
            this.$emit('submit', this.createdPost);
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
    flex-grow: 1;
    margin: 0px 10px 0px 10px;
}
.title-block {
    flex-grow: 3;
    margin-right: 40px;
}
.category-block {
    flex-grow: 1;
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
.form-button:disabled {
    background-color: #bdc3c7 ;
    color: #f8f9f9;
}
.image-upload {
    flex-grow: 0.25;
}
.image-preview {
    max-width: 200px;
    height: auto;
}
.error {
    color:brown;
    margin: 10px 20px 10px 40px;
}
</style>
