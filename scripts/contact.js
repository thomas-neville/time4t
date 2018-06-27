var navbaritems = [
	{tab: "Home",
	page: "index.html"},
	{tab: "Contact",
	page: "contact.html"},
	{tab: "Work",
	page: "work.html"},
	{tab: "Ideas",
	page: "ideas.html"}
]

// var for blog item here

var app = new Vue({
	el: '#time4t-app',
	data: {
		nav: navbaritems,
		// data for blog
	}
})
