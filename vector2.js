var Vector2 = function () {
	this.x = 0;
	this.y = 0;
}

Vector2.prototype.set = function (x,y) {
	this.x = x;
	this.y = y;
}

Vector2.prototype.add = function (v) {
	this.x = this.x + v.x;
	this.y = this.y + v.y;
}

Vector2.prototype.subtract = function (v) {
	this.x = this.x - v.x;
	this.y = this.y - v.y;
}

Vector2.prototype.multiplyScalar = function (num) {
	this.x = this.x * num;
	this.y = this.y * num;
}