var Shape = require('./shape')

// Main Shape Pikachu & Proto
function Pikachu (positionX, positionY, color) {
  Shape.call(this, positionX, positionY, color, 100, 100)
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

module.exports = Pikachu

// var pikachu1 = new Pikachu(0, 400, 'red')
// var pikachu2 = new Pikachu(800, 400, 'blue')
// console.log(pikachu1, pikachu2)
