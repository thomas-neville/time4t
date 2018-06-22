console.log("test");


// pass key, value pairs as strings
// var for navigation bar
var navbar-items = [
	{tab: "Home",
	page: "index.html"},
	{tab: "Contact",
	page: "contact.html"},
	{tab: "Work",
	page: "work.html"},
	{tab: "Ideas",
	page: "ideas.html"}
]

// var for blog item
var blog-items = [
	{},
	{},
	{},
	{}
]

var app = new Vue({
	el: '#time4t-app',
	data: {
		nav: navbar-items,
		blog: blog-items
		// consortium: colleges
	}
})