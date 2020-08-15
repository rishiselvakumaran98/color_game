[Link to my Game](https://fun-color-game98.herokuapp.com)
# Intro:
Get ready for the game that will tease your brain and test your knowledge on colors! This is a very simple and fun color game created by me using HTML, CSS Styling, and JS scripting using basic DOM manipuation.

# How to play in the Game:

- Player begins the game with 5 rounds, and has a choice to pick between three modes: Easy, medium, and Hard
- To begin the game, player should guess the color on the tabs based on the generated RGB Value, and click them.
- If the picked color is correct, player gets 5 points! If the picked color is wrong, player loses 1 point for each wrong attempt.
- At the end of the 5 rounds, player gets a glimpse of the total points they earned before the game resets automatically.


# Potential Cons:
- The game does not have 3D rendering and fabulous animations, as it was designed to showcase my understanding of using basic web development tools such as using HTML, CSS and JS. Hence it has a very basic interface design and the operations are simple in their usage.

# How they all work together:

The Display site (frontend):

- The application frontend was created using a HTML file (color_game.html). The styling and animation was done using CSS such as the color fading for the tabs the rounded button design and all the tag element designs. The font designs were made using Google fonts.
 

Backend works:

- The backend works such as clicking the color buttons and verifying if the selected button has same RGB Values as the generated RGB Value to the player is done using Basic DOM Manipulation and some understanding of reading through javascript arrays. 

- The random colors are made using random number generator that generate random numbers between 0-255. The values are then added to an RGB array which is then added to a main colors array consisting of all these RGB values.

- Using DOM(Document Object Model), the html elements (color tabs) are then set to these RGB Values displaying the random colors to the player.

- The point system was implemented in the game pretty recently and a player_point variable in the color_game.js file is used to add and subtract the points accordingly based on the player's move.  

- The codes used are followed with a DRY model as much as possible and there are some exceptions such as the repeated display of the point systems through out the control loops and functions.


I wanted this project to be accomplished using simple tools such HTML, CSS Styling, Vanilla JS and Basic DOM Manipulation, and it was a success that I was able to complete them only using these tools and nothing more; (Well I deployed them using Heroku;) )

Otherwise, feel free to play my game and use them wisely!

Project link:

https://fun-color-game98.herokuapp.com
