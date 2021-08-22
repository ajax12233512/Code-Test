# Code-Test
Online test that delivers a coding assesment to the user
## 8/16/21 Good Morning
So last night I started on the start screen page. I has having trouble getting the background image to load but after many different commits I finally got it. Basically, the problem was the file path for the background image. In my `styles.css`, inside the the background-image url, I incorreclty put: `assets/img/backgroundcode.jpg`. For some reason, github pages will not display the image unless it was changed to this path: `img/backgroundcode.jpg`. Weird.
### 5:27 Making progress
So the main thing I added is a big array full of questions and answers and I also styled up the Start screen as well. Hopefully I can figure out a way to successfully load the questions into the window and be able to create the correct logic for validating the correct answer. I then have to think about storing a time variable of some sort and subtracting off of it if the user enters the wrong question. For now this is the array and some important styling stuff points I want to write down:
````Javascript
Questions = [
    q1 = {
        "question" : "What is the purpose of HTML",
        "choice1"  : "To develop video games",
        "choice2"  : "Enhance the user experience by automating code",
        "choice3"  : "Used to create the websites",
        "choice4"  : "A government sponsered entity tasked with important objectives"
    },
    q2 = {
        "question" : "What is the purpose of CSS in programming",
        "choice1"  : "To Search and Destroy",
        "choice2"  : "To provide college education at a Catholic University",
        "choice3"  : "Styles webpages using CSS selectors",
        "choice4"  : "To enhance interactivity in websites"
    },
    q3 = {
        "question" : "What is the difference between ID and CLASS selector in CSS",
        "choice1"  : "IDs are for groups of styles while CLASS is for one individual element to be styled",
        "choice2"  : "CLASSES are for groups of styles while IDs are for one individual element",
        "choice3"  : "They are both used to style the same thing",
        "choice4"  : "ID are for HTML tags and CLASSes are for css selectors"
    },
    q5 = {
        "question" : "What is the most accurate description of what 'display: flex;' does",
        "choice1"  : "It flexes your html elements so they can get stronger",
        "choice2"  : "It provides an outline for you to code onto",
        "choice3"  : "An old addage to the Flex-Seal",
        "choice4"  : "Takes element out of document flow so you can apply flex properties to them"
    },
    q6 = {
        "question" : "What is this CSS selector selecting? .myheaders h1, #main-header ~ p:hover{...}",
        "choice1"  : "All the headers in the document",
        "choice2"  : "It is selecting the .myheaders class and all the h1 in there and all the #mainheader(s) when they have a <p> that is being hovered over",
        "choice3"  : "Its selecting all the <p>'s when either .myheaders h1 or #mainheader is being hovered",
        "choice4"  : "Its selecting all hovered <p>'s that have the same parent as myheaders h1 or #mainheader and are under those elements without being directly under."
    },
    q7 = {
        "question" : "What does 'var' mean in javascript'",
        "choice1"  : "var is a keyword in javascript to denote variables",
        "choice2"  : "Its a trick made to fool college students",
        "choice3"  : "It signifies a for-loop when you have to put another for-loop inside itself",
        "choice4"  : "Choice 4"
    },
    q8 = {
        "question" : "What goes inside the parenthesis of an if-statement",
        "choice1"  : "A mathematical expression that will be used as a parameter for the if-statement",
        "choice2"  : "Nothing goes into the parenthesis of an if statement",
        "choice3"  : "An expression that evaluates to either true or false",
        "choice4"  : "Function go inside the parenthesis of an if-statement"
    },
    q9 = {
        "question" : "What is the purpose of Javascript in web development",
        "choice1"  : "It is the language that all computers speak",
        "choice2"  : "It can be used to communicate to the moon-people",
        "choice3"  : "It is used to make websites more interactive",
        "choice4"  : "It facilitates the transporation of data to mainstream cinema companies"
    },
    q10 = {
        "question" : "What is the concept of scope in javascript",
        "choice1"  : "It is important to know scope so you can target different HTML elements",
        "choice2"  : "It is the idea that certain variables are either declared globally or locally",
        "choice3"  : "To be able to have control of as much of the DOM as you can",
        "choice4"  : "The idea of being securing your code so outside users cannot access data"
    },
    q11 = {
        "question" : "What is the hexdecimal code for white",
        "choice1"  : "#FFFFFF",
        "choice2"  : "#000000",
        "choice3"  : "rgb(0,0,0,1)",
        "choice4"  : "#456F4F"
    }
];
````
Basically every every element in the `Questions` array has a question and 4 answer choices. I'm planning of storing them and randomly outputting them to the user. 

For the Q/A screen, I set 4 box in a 2x2 square with the question over top of it. I styled it a bit so that it would match the theme and colors of the background.

## This NO GOOD. make CRASH
````Javascript
while(listQuestion.includes(Questions[k])){
            var index = Math.floor(Math.random()*Questions.length); 
        }
````
Use 'if-statement' for now....
