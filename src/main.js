import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAhWO_05NTKUzfxbJ-Gm22ea4T5RWGaNTE",
  authDomain: "lab5-2a453.firebaseapp.com",
  databaseURL: "https://lab5-2a453.firebaseio.com",
  projectId: "lab5-2a453",
  storageBucket: "lab5-2a453.appspot.com",
  messagingSenderId: "984989610276",
  appId: "1:984989610276:web:c07c8fcba2de32be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
