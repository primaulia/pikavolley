var Shape = require('./shape.js')

function Ball (positionX, positionY, color) {
  Shape.call(this, positionX, positionY, color)
  this.radius = 20
  this.startAngle = 0
  this.endAngle = 360
  this.speed = 100
}
Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Shape

module.exports.Ball = Ball
