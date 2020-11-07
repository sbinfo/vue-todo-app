import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faCheck, faInfo, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faInfo, faTimes);

Vue.component('font', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
