window._ = require('lodash');

window.$ = require('jquery');

window.Popper = require('popper.js');

require('bootstrap');

import Vue from 'vue';

// Components
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
});