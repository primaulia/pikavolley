// CONSTRUCTOR & PROTOTYPE
// Main Shape Contructor & Proto
function Shape (positionX, positionY, color, width = 20, height = 20, canvasHeight = 800, canvasWidth = 800, gutter = 20) {
  this.positionX = positionX
  this.positionY = positionY
  this.color = color
  this.width = width
  this.height = height
  this.edgeLeft = 0
  this.edgeRight = canvasWidth - this.width
  this.edgeMiddle = (canvasWidth - gutter) / 2
  this.edgeBottom = canvasHeight - this.height
  this.edgeTop = 0 + this.height
}
Shape.prototype.moveTo = function (x, y) {
  this.positionX += x
  this.positionY += y
  console.log(y, this.positionY)
}

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


module.exports = Shape
