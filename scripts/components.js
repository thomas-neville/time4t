Vue.component('comp-navbar', {
    props: ['nav'],
    template: '<nav><ul><li v-for="navbaritems in nav"><a v-bind:href="navbaritems.page">{{ navbaritems.tab }}</a></li></ul></nav>'
})

Vue.component('comp-blog', {
	props: ['blog'],
	template: ''


})