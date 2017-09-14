var Vue = require('vue');
var hello = require('./hello.vue').default;

new Vue({
    el: '#app',
    components: {hello: hello},
    template: '<hello/>'
  }
);
