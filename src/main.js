import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router';


import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/index.js'
import './assets/js/flexible.js'


// Vue.use(VueAxios, Axios);
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')