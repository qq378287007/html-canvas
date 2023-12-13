function Box(x, y, width, height, color) {
    //小球中心的x坐标，默认值为0
    this.x = x || 0;
    //小球中心的y坐标，默认值为0
    this.y = y || 0;
    //小球宽度，默认值为80
    this.width = width || 80;
    //小球高度，默认值为40
    this.height = height || 40;
    this.color = color || "red";
    //x和y速度
    this.vx = 0;
    this.vy = 0;
}

Box.prototype = {
    stroke: function (cxt) {//绘制“描边”矩形
        cxt.save();
        cxt.beginPath();
        cxt.rect(this.x, this.y, this.width, this.height);
        cxt.closePath();
        cxt.strokeStyle = this.color;
        cxt.stroke();
        cxt.restore();
    },
    fill: function (cxt) {//绘制“填充”矩形
        cxt.save();
        cxt.beginPath();
        cxt.rect(this.x, this.y, this.width, this.height);
        cxt.closePath();
        cxt.fillStyle = this.color;
        cxt.fill();
        cxt.restore();
    }
}