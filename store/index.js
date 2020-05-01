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
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
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
                .post("https://garments-76648.firebaseio.com/posts/"+createdPost.category+".json", createdPost)
                .then(result => {
                    vuexContext.commit('addPost', {...createdPost, id: result.data.name})
                })
                .catch(e => console.log(e));
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            loadedPosts: state => (category, subcategory) => {
                const categoryPosts = state.loadedPosts.find(cat => cat.id === category)
                let posts = Object.values(categoryPosts).slice(0, -1);
                let filteredPosts = posts.filter(p => p.subcategory.includes(subcategory))
                return filteredPosts
            },
        }
    });
};

export default createStore;