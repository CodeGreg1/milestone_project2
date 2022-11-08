# milestone_project2
Milestone project 2 Javascript game - Carnival Shooting Gallery


<h1 align="center">Greg Goodrem Milestone Project 2</h1>

This project is designed as a shooting gallery game for fun. This game is constructed with my correct knowledge level of HTML, CSS and Javascript. The goal of the game is to shoot the targets as quickly as you can during the 20 second time limit.

The live website can be found here.

[View the live project here.](https://codegreg1.github.io/milestone_project2/)

<h2 align="center"><img src="assets/media/mock-up.png"></h2>

## User Experience (UX and UI)

-   ### User stories

    -   #### First Time Visitor Goals

        - As a first time user I need them to understand how to get the game started and the general rules of the game. 
        
        - As a first time user I need them to understand how to shoot a target to take them down.

        - As a first time user I need them to easily play the game through responsive design of the shooting gallery.

        - As a first time user I need them to realise how the scoring works so they can beat their previous score next time they play. 

    -   #### Returning Visitor Goals

        - As a Returning Visitor, I want them to be competitive with themselves and try and get the best score possible. 


-   ###  Game Research  
    
    I wanted to explore a retro shooting style game which would be very unique. I loved playing games like this myself games such as Time-crisis back in the 1990's. I gathered more inspiration for this game from shoot'em ups and classic retro games like duck hunt, space invaders and asteroids.
    I played several of these types of games both online and through a retro gaming console to help develop an idea.
    
    -   ### Research Analysis
        I thought although it would be great to write games such as space invaders or asteroids in a more code along type of learning for this project, I wanted to put my own spin on a shooting game.
    
        I hadn't seen a game like the one I designed on any of the retro sites or comsoles. 
        I thought to keep it child friendly I would use a carnival shooting style instead of a more military style shooting experience with enemy targets.
        Although this idea could develop into more development of the game.


-   ### Design
    The design is suppose to mimic a carnival stall where you would shoot at the targets and win a prize!

    #### Colour Scheme
    -   The two main colours used are Red, Black and White as I feel these fit with the general aesthetics of the theme.
   
    #### Typography
    -   I've used two fonts in this game.
    'Sancreek' has been used to give the text a more fun carnival feel although it's quite a complicated design so mainly used as titles and sub titles.
    'Roboto' has also been used to give the instructions a clean and clear font which should make it easy to read.

    #### Imagery
    -   Two pictures have been used I've created and edited both in canva.
    The target design was made to show a realistic visual for a target with the rings showing a potential score. 
    Later during my game development I thought I would keep the design however lose the scoring so it would be less complicated for the player only having to focus on the centre target and the outer white rings.
    The carnival background header was created to give the game some sort of carnival feel.

    #### Wireframes
    -   Initial/Instruction Screen Wireframe - [View](https://codegreg1.github.io/milestone_project2/assets/media/projectWireframeInitialScreen.png)
    -   Game Display Screen Wireframe - [View](https://codegreg1.github.io/milestone_project2/assets/media/projectWireframeGameScreen.png)
    -   Score Screen Wireframe - [View](https://codegreg1.github.io/milestone_project2/assets/media/projectWireframeScoreScreen.png)


    #### Responsive Design Features
    - Game Designed completely independently of tutorials or code along type projects.
    - Game is designed as an interactive shooting gallery.
    - Game is playable on all platforms although mobile will achieve a higher score due to more digits able to hit more targets.
    - The game keeps score of the Total score, Perfect shots, also a shoots taken tally.
    - The game has an animated count down clock and also animated target when knocked down.
    - The game also resets the target within the different levels length as soon as the previous target disappears.
        
    ### Future Features
    -   Once a website is established I could create a highscore section which also differenciates between mobile and desktop players.    
    -   Different types of level themes.
    -   Moving targets either left or right to make it more challenging.

    ### Technologies used
    -   [HTML5](https://en.wikipedia.org/wiki/HTML5)
    -   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    -   [Javascript](https://en.wikipedia.org/wiki/javascript)

    ### Frameworks, Libraries & Programs Used

    - [Google Fonts:](https://fonts.google.com/)
        - Google fonts were used to import the 'Roboto' font into the style.css file which is used on all pages throughout the project.
    - [Font Awesome:](https://fontawesome.com/)
        - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
    - [Git](https://git-scm.com/)
        - Git was used for version control by utilizing the VS Code terminal to commit to Git and Push to GitHub.
    - [Visual Studio Code](https://code.visualstudio.com)
        - I used VS Code as I have found it quite easy to use and also enables me to automatically have a hard copy of each file on my laptop
    - [GitHub:](https://github.com/)
        - GitHub is used to store the projects code after being pushed from Git.
    - [Balsamiq:](https://balsamiq.com/)
        - Balsamiq was used to create the wireframes during the design process.
    - [Howler](https://howlerjs.com)
        - I used Howler to correct the issue I had with the sound effects not playing correctly.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcodegreg1.github.io%2Fmilestone_project2%2F) - Results - No Errors or Warnings
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcodegreg1.github.io%2Fmilestone_1_greg_goodrem%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) - Results No Errors
- [Lighthouse Report Mobile](https://codegreg1.github.io/milestone_project2/codegreg1.github.io_2022-06-20_10-37-19.html)
- [Lighthouse Report Desktop](https://codegreg1.github.io/milestone_project2/codegreg1.github.io_2022-06-20_10-39-51.html)
- [Wave Report](https://wave.webaim.org/report#/https://codegreg1.github.io/milestone_project2/) - There are alerts that relate to possible headings however these are not 

Also I used Jest Testing for automated testing I ran into a couple of problems however I isolated the file and tested seperately. You'll find the isolated function file here:

[Jest Testing Isolated Script Used](https://codegreg1.github.io/milestone_project2/assets/js/script2.js)

Below is the link to the Testing Script which came out with a result of 

[Jest Test Script](https://codegreg1.github.io/milestone_project2/assets/js/script.test.js)



## Errors and Bugs
The biggest area of resistance with the project was trying to get the sound to work in the way intended. I was able to over come this issue with the use of Howler which allowed me to deploy a better user experience with the sound playing on all devices without delays. The problem was initially due to the way Safari among other browsers doesn't allow you to play sounds on a website straight away and requires some sort of interaction with the page first.


Another bug I have is if the user decides to zoom in on the page and try and hit targets closer this actually distorts the placement of the bullet hole effect. One way in the future to address this is to make the shooting gallery change to the size of the viewing area.

## Journey
I feel I have made some big leaps in programming as the project initially started out as it looks below. I was figuring out how to move the targets from one place to another with animation to the final project with a much better game feel to it.

Below is where I started and experimented with javascript.
<img src="assets/media/initialLayout.jpg">

Below is where it led before I got to my final design
<img src="assets/media/secondPhase.jpg">

Below is my final design with lots of additions and counters for that true game feel.
<img src="assets/media/finalPhase.png">

