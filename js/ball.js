function Ball(x, y, radius, color) {
    this.x = x || 12;
    this.y = y || 12;
    this.radius = radius || 12;
    this.color = color || "#6699FF";
    this.scaleX = 1;
    this.scaleY = 1;
    this.vx = 0;
    this.vy = 0;
}

Ball.prototype = {
    stroke: function (cxt) {
        cxt.save();
        cxt.scale(this.scaleX, this.scaleY);
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, false);
        cxt.closePath();
        cxt.strokeStyle = this.color;
        cxt.stroke();
        cxt.restore();
    },
    fill: function (cxt) {
        cxt.save();
        cxt.translate(this.x, this.y);
        cxt.scale(this.scaleX, this.scaleY);
        cxt.beginPath();
        cxt.arc(0, 0, this.radius, 0, 360 * Math.PI / 180, false);
        cxt.closePath();
        cxt.fillStyle = this.color;
        cxt.fill();
        cxt.restore();
    },
    getRect: function () {//获取包含小球的最小矩形
        var rect = {
            x: this.x - this.radius,
            y: this.y - this.radius,
            width: this.radius * 2,
            height: this.radius * 2
        }
        return rect;
    },
    checkMouse: function (mouse) {
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius;
    }
}