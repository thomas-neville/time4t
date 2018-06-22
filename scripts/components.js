Vue.component('comp-navbar', {
    props: ['nav'],
    template: '<nav><ul v-for="navbar-items in nav"><li><a v-bind:href="navbar-items.page">navbar-items.tab</a></li></ul></nav>'
})

Vue.component('comp-blog', {
	props: ['blog'],
	template: ''


})