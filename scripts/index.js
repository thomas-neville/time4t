var navbaritems = [
	{tab: "Home",
	page: "index.html"},
	{tab: "Contact",
	page: "contact.html"},
	{tab: "Work",
	page: "work.html"}
]

// var for blog item here

var app = new Vue({
	el: '#time4t-app',
	data: {
		nav: navbaritems,
		// data for blog
	}
})

window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  };
}
