import Vuex from "vuex";
import axios, * as others from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            menu: {
                "Learn" : ["General", "Materials", "Knitting", "Weaving"],
                "Repair": ["Sashiko", "Holes"],
                "Reshape": ["Lenght", "Wide"],
                "Refresh": ["Color", "Acessorize"],
                "Recycle": ["Transform", "Give"]
            },
            current: {
                category: "",
                subcategory: ""
            },
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost
            },
            setCategory(state, category) {
                state.current.category = category;
            },
            setSubCategory(state, category) {
                state.current.subcategory = category;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios
                  .get("https://garments-76648.firebaseio.com/posts.json")
                  .then(res => {
                    const postsArray = [];
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key });
                    }
                    vuexContext.commit("setPosts", postsArray);
                  })
                  .catch(e => context.error(e));
            },
            addPost(vuexContext, createdPost) {
                let id = "";
                return axios
                .post("https://garments-76648.firebaseio.com/posts/.json", createdPost)
                .then(result => {
                    const filename = createdPost.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    id = result.data.name
                    const fd = new FormData();
                    fd.append('image', createdPost.image, result.data.name + ext)
                    return axios.post("https://us-central1-garments-76648.cloudfunctions.net/uploadFile", fd)
                })
                .then(res => {
                    const updatedPost = {
                        ...createdPost,
                        imageURL: res.data.imageURL,
                        id: id,
                        updatedDate: new Date()
                    }
                    return axios.put("https://garments-76648.firebaseio.com/posts/"+ id + ".json", updatedPost)
                })
                .then(res => {
                    vuexContext.commit('addPost', {...res.data, id: id})
                })
                .catch(e => console.log(e));
            },
            editPost(vuexContext, { editedPost, imgChanged }) {
                return axios.put("https:///garments-76648.firebaseio.com/posts/" + editedPost.id + ".json", editedPost)
                .then(res => {
                    if (imgChanged) {
                        const fd = new FormData();
                        const filename = editedPost.image.name
                        const ext = filename.slice(filename.lastIndexOf('.'))
                        fd.append('image', editedPost.image, editedPost.id + ext)
                        return axios.post("https://us-central1-garments-76648.cloudfunctions.net/uploadFile", fd)
                    }
                    return
                })
                .then(res => {
                    const updatedPost = (imgChanged ? {
                        ...editedPost,
                        imageURL: res.data.imageURL,
                        updatedDate: new Date()
                    } : editedPost)
                    vuexContext.commit('editPost', updatedPost)
                })
                .catch(e => console.log(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            },
            selectCategory(vuexContext, category) {
                vuexContext.commit("setCategory", category);
                vuexContext.commit("setSubCategory", "")
            },
            selectSubCategory(vuexContext, category) {
                vuexContext.commit("setSubCategory", category);
            }
        },
        getters: {
            loadedSubcategoryPosts: state => (category, subcategory) => {
                return state.loadedPosts.filter(p => (p.category === category && p.subcategory === subcategory))
            },
            loadedCategoryPosts: state => (category) => {
                if (category) {
                    return state.loadedPosts.filter(p => p.category === category)
                }
                return state.loadedPosts
            }
        }
    });
};

export default createStore;