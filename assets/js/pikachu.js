var Shape = require('./shape.js')

// Main Shape Pikachu & Proto
function Pikachu (positionX, positionY, color, canvasWidth, canvasHeight, gutter) {
  Shape.call(this, positionX, positionY, color, canvasWidth, canvasHeight, gutter, 100, 100)
  this.speed = 200
}

// TODO: Find a better solution to check middle collision
Pikachu.prototype = Object.create(Shape.prototype)
Pikachu.prototype.constructor = Shape

Pikachu.prototype.moveLeft = function (modifier) {
  if (this.positionX <= this.edgeLeft) return
  this.moveTo(-(this.speed * modifier), 0)
}
Pikachu.prototype.moveRight = function (modifier) {
  if (this.positionX >= this.edgeRight) return
  this.moveTo(this.speed * modifier, 0)
}

// var pikachu = new Pikachu(0, 400, 'red', 500, 600, 360)
// console.log(pikachu)
// pikachu.moveTo(8,9)
// console.log(pikachu)
// pikachu.moveLeft(20)
// console.log(pikachu)

module.exports = Pikachu
