3rd Project for Udacity - Front-end Nanodegree

The project was created by David Melhart with the resources provided by the Udacity team.

Additional sources to complete the project were:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
http://www.w3schools.com/js/
http://stackoverflow.com/

Basically reading up everything and trying to figure out how the provided code works, or is there any tool to use my ideas.

Reading on 2D collision detection:
http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/
http://devmag.org.za/2009/04/13/basic-collision-detection-in-2d-part-1/
http://gamedevelopment.tutsplus.com/tutorials/collision-detection-with-the-separating-axis-theorem--gamedev-169
(Actually went with something much easier)

Getting few ideas about the playfield:
http://www.html5rocks.com/en/tutorials/canvas/notearsgame/

Getting an addtitional code snippet to create the playfield:
http://strd6.com/2010/08/useful-javascript-game-extensions-clamp/

Apart from this some trial and error testing and debugging.


Game rules:

From the provided footage I deducted the following rules:

There is a playfield, on which the player can move. These are the grass and stone covered areas.
The player cannot go into the water.
The player jumps from tile to tile in every direction.
There are approximately three initial enemies who respawn when they leave the playfield.
The enemies only move on the stone covered areas, from left to right.
The movement of the enemies is smooth.
Bumping into an enemy causes the game to reset.
When the character reaches the water the winning condition of the game is fulfilled and the game resets.

Controls:
Up Arrow - Jump up
Down Arrow - Jump down
Left Arrow - Jump left
Right Arrow - Jump right
