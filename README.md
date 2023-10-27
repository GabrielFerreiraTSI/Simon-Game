# Simon-Game
 Made in jQuery

## Tutorial
### Step 1
- 1.1. Downoload the files "index.html" and "styles.css", or create the files and copy the code after;
- 1.2. Create the file "script.js".
  Important: Don't forgot to including the Javascript file in HTML file as "<script src="script.js" charset='utf=8'></script>".

### Step 2
- 2.1 Create a function makeSequence() in "script.js";
- 2.2 Inside of the function, create a variable named "randomNumber" and set as random number between 0 and 3.
  Important: Remember to doing tests before to continue.

### Step 3
- 3.1. Use jQuery to select the button with the same id as the randomChosenColour;
- 3.2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1;
- 3.3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

Hint 1. Remember that to select ids with jQuery you need the "#" symbol.

https://api.jquery.com/id-selector/

Hint 2. https://www.google.co.uk/search?q=animate+flash+jQuery
Hint 3. https://www.google.co.uk/search?q=play+sound+javascript

### Step 4
- 4.1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function;
- 4.2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked;

--> So if the Green button was clicked, userChosenColour will equal its id which is "green".

- 4.3. At the top of the game.js file, create a new empty array with the name userClickedPattern;
- 4.4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern;

At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.

Hint 1A. Remember that all the buttons share the same class (btn).
Hint 1B. Remember that jQuery has a .click() function: https://api.jquery.com/click/
Hint 1C. jQuery handlers are anonymous functions: https://api.jquery.com/click/#click-handler

Hint 2A. Inside the handler, you can use the keyword this to refer to the button object that triggered the click.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

Hint 2B. You can use the attr() function in jQuery to find out the value of any of the attributes of an object. https://api.jquery.com/attr

### Step 5
- 5.1. In the same way we played sound in makeSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played;
- 5.2. Create a new function called playSound() that takes a single input parameter called name;
- 5.3. Take the code we used to play sound in the makeSequence() function and move it to playSound();
- 5.4. Refactor the code in playSound() so that it will work for both playing sound in makeSequence() and when the user clicks a button.

### Step 6
- 6.1. Create a new function called animatePress(), it should take a single input parameter called currentColour;
- 6.2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey;
- 6.3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress();
- 6.4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds;

Once complete, you will get this effect when you click on any button.

Hint 3. https://api.jquery.com/addclass/
Hint 4. https://www.google.co.uk/search?q=how+to+add+delay+javascript

### Step 7
- 7.1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call makeSequence();

You'll need a way to keep track of whether if the game has started or not, so you only call makeSequence() on the first keypress.

- 7.2. Create a new variable called level and start at level 0;
- 7.3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0";
- 7.4. Inside makeSequence(), increase the level by 1 every time this method/function is called;
- 7.5. Inside makeSequence(), update the h1 with this change in the value of level.

All going well, this is what you should see when you refresh the website.

Hint 1. You'll need a variable called started to toggle to true once the game starts and if it's true, then further key presses should not trigger makeSequence().
Hint 3. The h1 has a unique id of level-title which you can target with jQuery.
Hint 5.  You'll need to use jQuery again to change the h1 by targeting the id: level-title.

### Step 8
At this point, it might be worth reviewing how the Simon game works.

Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.

If the user messes up the sequence, then the game ends.

You can either try to figure out how to achieve this logic by trying to write the code yourself or you can follow the challenge steps below:

- 8.1. Create a new function called checkAnswer(), it should take one input with the name currentLevel;
- 8.2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence:

e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3;

- 8.3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong";

You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.

- 8.4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement;
- 8.5. Call makeSequence() after a 1000 millisecond delay;
- 8.6. Once makeSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

Now you should be able to play the game.

### Step 9
- 9.1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong;
- 9.2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds;

All going well, you should end up with red flash effect.

- 9.3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

### Step 10
- 10.1. Create a new function called startOver();
- 10.2. Call startOver() if the user gets the sequence wrong;
- 10.3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.

Have fun!