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

// Game development
var teaBag;

function startGame() {
    myGameArea.start();
    teaBag = new component(30, 30, "brown", 10, 120);
}

var myGameArea = {
		// TODO query selector for class name of canvas? getElementById does not work
    canvas : document.getElementById("tea-game"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
