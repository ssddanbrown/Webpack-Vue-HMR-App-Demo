/**
 * Import our main SASS files directly.
 * This allows hot-reloading of styles during development.
 * Additional style outputs can be generated by adding direct paths
 * to scss files in the webpack entry object.
 */
import "./styles.scss";

/**
 * Import Vue libs and base Vue component
 */
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";


/**
 * Set up Vue router.
 * Routes use dynamic imports which splits out generated code which
 * is loading in over the network on demand.
 * Reduced main bundle size.
 */

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('./pages/home.vue') },
  { path: '/about', component: () => import('./pages/about.vue') },
]

const router = new VueRouter({
  routes
});


/**
 * Initialise top Vue instance.
 */
new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});