// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    
    // Setting the update parameters for every enemy to respawn

    for (enemy in allEnemies) {
        if (allEnemies[enemy].x > 510) {
            
            allEnemies.splice(enemy, 1);

            console.log("Old enemy deleted. 'allEnemies' length: '" + allEnemies.length + "'."); 
            
            newEnemy();
        };
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function () {

};

Player.prototype.handleInput = function (direction) {
    if (direction === "left") {
        player.x -= 101;
    } 
    else if (direction === "right") {
        player.x += 101;
    }
    else if (direction === "up") {
        player.y -= 83;
    }
    else if (direction === "down") {
        player.y += 83;
    };
    console.log("Player jumped to 'x' coordinate: '" + player.x + "' & 'y' coordinate: '" + player.y + "'.");
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(202, 382);
console.log("Player generated. Player created with 'x' coordinate: '" + player.x + "' & 'y' coordinate: '" + player.y + "'.");

var allEnemies = [];

function newEnemy () {
    if (Math.random() < 0.33){
        y = 50;
    }
    else if (Math.random() < 0.66){
        y = 133;
    }
    else {
        y = 216;
    };

    if (Math.random() < 0.33){
        speed = 100;
    }
    else if (Math.random() < 0.66){
        speed = 150;
    }
    else {
        speed = 200;
    };

    var enemy = new Enemy(-101, y, speed);
    console.log("New enemy generated. Enemy created with 'y' coordinate: '" + enemy.y + "' & speed: '" + enemy.speed + "'.");

    allEnemies.push(enemy);
    console.log("New enemy pushed into 'allEnemies'. 'allEnemies' length: '" + allEnemies.length + "'.");

};


function enemyInit () {
    for (i=0; i<3; i++) {
        newEnemy();
    };
    console.log("Initial enemies generated. All enemies pushed into 'allEnemies'.");
    console.log("'allEnemies' length === '" + allEnemies.length + "'. Ready to go!")
};

enemyInit();

function checkCollisions() {
    for (enemy in allEnemies) {
        
        //Calcullating 
        if (Math.round(allEnemies[enemy].x) > -60 && Math.round(allEnemies[enemy].x) < 60){
            var enemyX = 0;
        }
        else if (Math.round(allEnemies[enemy].x) > 41 && Math.round(allEnemies[enemy].x) < 161){
            var enemyX = 101;
        }
        else if (Math.round(allEnemies[enemy].x) > 142 && Math.round(allEnemies[enemy].x) < 262){
            var enemyX = 202;
        }
        else if (Math.round(allEnemies[enemy].x) > 243 && Math.round(allEnemies[enemy].x) < 363){
            var enemyX = 303;
        }
        else if (Math.round(allEnemies[enemy].x) > 344 && Math.round(allEnemies[enemy].x) < 464){
            var enemyX = 404;
        }

        if (enemyX == player.x && allEnemies[enemy].y == player.y){
            console.log("COLLISION!");
        };
    };
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
