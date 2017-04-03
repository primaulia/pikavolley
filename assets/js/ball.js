var Shape = require('./shape')

// Main Shape Ball & Proto
function Ball (positionX, positionY, color) {
  Shape.call(this, positionX, positionY, color)
  this.canvasWidth = canvasWidth
  this.canvasHeight = canvasHeight
  this.gutter = gutter
  this.radius = 20
  this.startAngle = 0
  this.endAngle = 360
  this.speed = 100
}
Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Shape

Ball.prototype.arcTo = function (x, y) {
  this.positionX += x
  this.positionY += y
}

Ball.prototype.move = function (modifier) {
  var tx = Math.abs((this.speed * modifier) - this.positionX)
  var ty = Math.abs((this.speed * modifier) - this.positionY)
  console.log('posX, posY', this.positionX, this.positionY)
  console.log('tx ty', tx, ty)
  var dist = Math.sqrt(tx * tx + ty * ty)
  var velX = (tx / dist) * this.speed * modifier
  var velY = (ty / dist) * this.speed * modifier
  this.arcTo(velX, velY)
}

Ball.prototype.hitBottom = function () {
  return this.positionY >= this.edgeBottom
}

module.exports = Ball
