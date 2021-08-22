var start = document.getElementById('start');       //links to start button
var welcome = document.querySelector('.welcome');   //links to welcome screen

//Handles start animation
function startAni(){
    welcome.classList.add("disapear-animation");
    setTimeout(function(){ //setTimeout required so the .hide class will be added after 2seconds. .hide sets display: none.
        welcome.classList.add("hide");
        showQuestions();
    }, 2000);
}
start.addEventListener('click', startAni);

function showQuestions(){
    timerContainer.classList.add('show');
    questionContainer.classList.add('show');
    choice1.classList.add('show');
    choice2.classList.add('show');
    choice3.classList.add('show');
    choice4.classList.add('show');
    
    writeQuestion.textContent = Questions[0].question;
    choice1.innerText = Questions[0].choice1;
    choice2.innerText = Questions[0].choice2;
    choice3.innerText = Questions[0].choice3;
    choice4.innerText = Questions[0].choice4;

    userChoice();

}

//Array filled with Questions and answers
var Questions = [
    q1 = {
        "question" : "What is the purpose of HTML",
        "choice1"  : "To develop video games",
        "choice2"  : "Enhance the user experience by automating code",
        "choice3"  : "Used to create the websites",
        "choice4"  : "A government sponsered entity tasked with important objectives",
        "correct"  : "3"
    },
    q2 = {
        "question" : "What is the purpose of CSS in programming",
        "choice1"  : "To Search and Destroy",
        "choice2"  : "To provide college education at a Catholic University",
        "choice3"  : "Styles webpages using CSS selectors",
        "choice4"  : "To enhance interactivity in websites",
        "correct"  : "3"
    },
    q3 = {
        "question" : "What is the difference between ID and CLASS selector in CSS",
        "choice1"  : "IDs are for groups of styles while CLASS is for one individual element to be styled",
        "choice2"  : "CLASSES are for groups of styles while IDs are for one individual element",
        "choice3"  : "They are both used to style the same thing",
        "choice4"  : "ID are for HTML tags and CLASSes are for css selectors",
        "correct"  : "2"
    },
    q4 = {
        "question" : "What is the most accurate description of what 'display: flex;' does",
        "choice1"  : "It flexes your html elements so they can get stronger",
        "choice2"  : "It provides an outline for you to code onto",
        "choice3"  : "An old addage to the Flex-Seal",
        "choice4"  : "Takes element out of document flow so you can apply flex properties to them",
        "correct"  : "4"
    },
    q5 = {
        "question" : "What is this CSS selector selecting? .myheaders h1, #main-header ~ p:hover{...}",
        "choice1"  : "All the headers in the document",
        "choice2"  : "It is selecting the .myheaders class and all the h1 in there and all the #mainheader(s) when they have a <p> that is being hovered over",
        "choice3"  : "Its selecting all the <p>'s when either .myheaders h1 or #mainheader is being hovered",
        "choice4"  : "Its selecting all hovered <p>'s that have the same parent as myheaders h1 or #mainheader and are under those elements without being directly under.",
        "correct"  : "4"
    },
    q6 = {
        "question" : "What does 'var' mean in javascript'",
        "choice1"  : "var is a keyword in javascript to denote variables",
        "choice2"  : "Its a trick made to fool college students",
        "choice3"  : "It signifies a for-loop when you have to put another for-loop inside itself",
        "choice4"  : "Choice 4",
        "correct"  : "1"
    },
    q7 = {
        "question" : "What goes inside the parenthesis of an if-statement",
        "choice1"  : "A mathematical expression that will be used as a parameter for the if-statement",
        "choice2"  : "Nothing goes into the parenthesis of an if statement",
        "choice3"  : "An expression that evaluates to either true or false",
        "choice4"  : "Function go inside the parenthesis of an if-statement",
        "correct"  : "3"
    },
    q8 = {
        "question" : "What is the purpose of Javascript in web development",
        "choice1"  : "It is the language that all computers speak",
        "choice2"  : "It can be used to communicate to the moon-people",
        "choice3"  : "It is used to make websites more interactive",
        "choice4"  : "It facilitates the transporation of data to mainstream cinema companies",
        "correct"  : "3"
    },
    q9 = {
        "question" : "What is the concept of scope in javascript",
        "choice1"  : "It is important to know scope so you can target different HTML elements",
        "choice2"  : "It is the idea that certain variables are either declared globally or locally",
        "choice3"  : "To be able to have control of as much of the DOM as you can",
        "choice4"  : "The idea of securing your code so outside users cannot access data",
        "correct"  : "2"
    },
    q10 = {
        "question" : "What is the hexdecimal code for white",
        "choice1"  : "#FFFFFF",
        "choice2"  : "#000000",
        "choice3"  : "rgb(0,0,0,1)",
        "choice4"  : "#456F4F",
        "correct"  : "1"
    }
];

//Linking queston and choices to the document 
var writeQuestion = document.getElementById('question');
var choice1 = document.getElementById('A');
var choice2 = document.getElementById('B');
var choice3 = document.getElementById('C');
var choice4 = document.getElementById('D');
var displayTimer = document.getElementById('time-left');
var choiceContainer = document.querySelector('.choice-container');
var questionContainer = document.querySelector('.question');
var timerContainer = document.querySelector('.timer-container');
var endScreen = document.querySelector('.endscreen');





function genQuestion(index){//index between 0 and 10 for Questions.length
    if(index === 10){
        //run the end screen
        console.log('run the end screen');
    }
    var listQuestion = [10];
    for(k = 0; k < 10; k++){
        listQuestion[k] = Questions[k]; 
    }

    console.log(listQuestion);

    if(index < 10){
        writeQuestion.textContent = listQuestion[index].question;
        choice1.innerText = listQuestion[index].choice1;
        choice2.innerText = listQuestion[index].choice2;
        choice3.innerText = listQuestion[index].choice3;
        choice4.innerText = listQuestion[index].choice4;
    } else {
        //run end screen
        timerContainer.classList.remove('show');
        questionContainer.classList.remove('show');
        choice1.classList.remove('show');
        choice2.classList.remove('show');
        choice3.classList.remove('show');
        choice4.classList.remove('show');
        endingSlide();
    }

}

function endingSlide(){
    endScreen.classList.add('show');
}


function userChoice(){

    counter = 0;

    choice1.addEventListener('click', function(e){
        console.log(e.target);
        counter++;
        genQuestion(counter);
    });
    choice2.addEventListener('click', function(e){
        console.log(e.target);
        counter++;
        genQuestion(counter);
    });
    choice3.addEventListener('click', function(e){
        console.log(e.target);
        counter++;
        genQuestion(counter);
    });
    choice4.addEventListener('click', function(e){
        console.log(e.target);
        counter++;
        genQuestion(counter);
    });

    
}

// userChoice()
// genQuestion();

// Create a bank of questions
// Connect the questions to the document to load into window properly
// Create logic to reveal correct answers and wrong answers

//Function for starting timer
function timer(){
    var minutes = 1;
    var seconds = 15;
    var timer = setInterval(function(){
        seconds--;
        displayTimer.innerText = minutes + " : " + seconds;
        console.log(seconds);
    
        if(seconds === 0 && minutes === 0) {
            clearInterval(timer);             
            console.log("reached here");
            //run end screen
        } else if(seconds === 0) {
            minutes--;
            seconds = 60;
        } else if(seconds < 10){
            displayTimer.innerText = minutes + " : " + "0" + seconds;
            console.log("seconds is less than 10");
        } 
    }, 1000);
}
