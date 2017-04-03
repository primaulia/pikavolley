var Shape = require('./shape')
var Pikachu = require('./pikachu')
var Ball = require('./ball')



$(function () {
  // HELPER VARS AND FUNCTIONS
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var canvasWidth = canvas.width
  var canvasHeight = canvas.height
  var gutter = 360
  var keysDown = {}
  var then = Date.now()


  // var tx = targetX - x,
  //       ty = targetY - y,
  //       dist = Math.sqrt(tx*tx+ty*ty),
  //       rad = Math.atan2(ty,tx),
  //       angle = rad/Math.PI * 180;
  //
  //       velX = (tx/dist)*speed,
  //       velY = (ty/dist)*speed;
  //
  //       x += velX
  //       y += velY
  //
  //       ctx.clearRect(0,0,500,500);
  //       ctx.beginPath();
  //       ctx.arc(x,y,5,0,Math.PI*2);
  //       ctx.fill();
  // INSTANCE OF ALL CONSTRUCTORS
  // TODO: Must count offset by width and height
  // var pikachu1 = new Pikachu(0, 400, 'red')
  // var pikachu2 = new Pikachu(800, 400, 'blue')
  // var ball = new Ball(200, 200, 'brown')
  // var objects = [pikachu1, pikachu2, ball]

  // first render of the game
  function render () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    drawObject(objects)
    ctx.save()
  }

  function drawObject (objects) {
    objects.forEach(function (obj) {
      ctx.fillStyle = obj.color
      if (obj.hasOwnProperty('radius')) {
        ctx.beginPath()
        ctx.arc(obj.positionX, obj.positionY, obj.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
      } else {
        // ctx.translate(obj.positionX, obj.positionY)
        ctx.fillRect(obj.positionX, obj.positionY, obj.width, obj.height)
      }
    })
  }

  function update (modifier) {
    switch (true) {
      case (37 in keysDown):
        pikachu2.moveLeft(modifier)
        break
      case (39 in keysDown):
        pikachu2.moveRight(modifier)
        break
      case (65 in keysDown):
        pikachu1.moveLeft(modifier)
        break
      case (68 in keysDown):
        pikachu1.moveRight(modifier)
        break
      default:
    }

    ball.move(modifier)
  }

  // jQuery Event Listener
  var $document = $(document)

  $document
  .on('keydown', function (e) {
    e.preventDefault()
    keysDown[e.keyCode] = true
  })
  .on('keyup', function (e) {
    e.preventDefault()
    delete keysDown[e.keyCode]
  })

  function isGameOver () {
    console.log(ball.positionX, ball.positionY)
    return ball.hitBottom()
  }

  // main game loop
  function main () {
    var now = Date.now()
    var delta = now - then

    if (isGameOver()) {
      console.log('Game over')
      return false
    } else {
      update(delta / 1000)
      render()
      then = now
    }
    window.requestAnimationFrame(main)
  }

  // CANVAS DRAWER HELPER FUNCTIONS
  if (canvas.getContext) {
    main()
  } else {
    alert('sorry canvas is not supported')
  }
})
