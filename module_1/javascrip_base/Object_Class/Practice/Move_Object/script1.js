function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 20;
    this.direction = "right";
  
    this.getHeroElement = function() {
      return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
  
    this.moveRight = function() {
      this.left += this.speed;
    }
  
    this.moveLeft = function() {
      this.left -= this.speed;
    }
  
    this.moveDown = function() {
      this.top += this.speed;
    }
  
    this.moveUp = function() {
      this.top -= this.speed;
    }
  
    this.changeImage = function(newImage) {
      this.image = newImage;
    }
  }
  
  var hero = new Hero('carR.png', 20, 30, 200);
  
  function start() {
    switch (hero.direction) {
      case "right":
        if (hero.left < window.innerWidth - hero.size) {
          hero.moveRight();
        } else {
          hero.direction = "down";
          hero.changeImage('carD.png');
        }
        break;
      case "left":
        if (hero.left > 0) {
          hero.moveLeft();
        } else {
          hero.direction = "up";
          hero.changeImage('carT.png');
        }
        break;
      case "down":
        if (hero.top < window.innerHeight - hero.size) {
          hero.moveDown();
        } else {
          hero.direction = "left";
          hero.changeImage('carL.png');
        }
        break;
      case "up":
        if (hero.top > 0) {
          hero.moveUp();
        } else {
          hero.direction = "right";
          hero.changeImage('carR.png');
        }
        break;
    }
  
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
  }
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: // Left arrow key
        hero.direction = "left";
        hero.changeImage('carL.png');
        break;
      case 38: // Up arrow key
        hero.direction = "up";
        hero.changeImage('carT.png');
        break;
      case 39: // Right arrow key
        hero.direction = "right";
        hero.changeImage('carR.png');
        break;
      case 40: // Down arrow key
        hero.direction = "down";
        hero.changeImage('carD.png');
        break;
    }
  }
  
  start();
  