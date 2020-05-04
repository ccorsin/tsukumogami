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
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return axios
                .post("https://garments-76648.firebaseio.com/posts/.json", createdPost)
                .then(result => {
                    vuexContext.commit('addPost', {...createdPost, id: result.data.name})
                })
                .catch(e => console.log(e));
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
                return state.loadedPosts.filter(p => p.category === category)
            }
        }
    });
};

export default createStore;