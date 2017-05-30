$(document).ready(function() {


function initialScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
    event.preventDefault();  
    generateHTML();

    timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
   
    selectedAnswer = $(this).text();
    if(selectedAnswer === correctAnswers[questionCounter]) {
   

        clearInterval(theClock);
        generateWin();
    }
    else {
   
        clearInterval(theClock);
        generateLoss();
    }
});

$("body").on("click", ".reset-button", function(event){

    resetGame();
}); 


function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Doh! You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/homer-computer-doh.jpg'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
} 
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>WooHoo! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
	} 
        function generateLoss() {
            incorrectTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Doh! The correct answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/homer-computer-doh.jpg'>";
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000);
        }

        function generateHTML() {
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
            $(".mainArea").html(gameHTML);
        }

        function wait() {
            if (questionCounter < 9) {
                questionCounter++;
                generateHTML();
                counter = 40;
                timerWrapper();
            } else {
                finalScreen();
            }
        }

        function timerWrapper() {
            theClock = setInterval(thirtySeconds, 1000);

            function thirtySeconds() {
                if (counter === 0) {
                    clearInterval(theClock);
                    generateLossDueToTimeOut();
                }
                if (counter > 0) {
                    counter--;
                }
                $(".timer").html(counter);
            }
        }

        function finalScreen() {
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Relax with a cold Duff! Here's how you did:" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Play Again?</a></p>";
            $(".mainArea").html(gameHTML);
        }

        function resetGame() {
            questionCounter = 0;
            correctTally = 0;
            incorrectTally = 0;
            unansweredTally = 0;
            counter = 40;
            generateHTML();
            timerWrapper();
        }

        var startScreen;
        var gameHTML;
        var counter = 40;
        var questionArray = ["What song is Homer singing a parody of when he crashes his car into a chestnut tree?", "Why did Mr. Burns pay Springfield $3,000,000?", "How many times had Apu been shot this year? (As a result almost missed work).", "You know a town with money is a little like the ______ with a spinning wheel, no one knows how he got it and dang if he knows how to use it.", "Which city the Lyle Lanley not sell a monorail to?", "Homer claims his life long dream is to be a monorail conductor, what was Homer’s ACTUAL life long dream according to Marge?", "Bart thought Homer use to be stuck in an emasculating go no where job, hehe kids, but now Bart wants to follow in his footsteps as a monorail conductor. What nickname did Homer give Bart that the kids can call him?", "There’s a family of ________ living inside the monorail (I call the big one Bitey).", "Who guest stars on this episode?", "What finally stops the speeding runaway monorail?"];
        var answerArray = [
            ["Meet the Flintstones", "The Jetsons", "The Adams Family", "The Brady Bunch"],
            ["The plant failed a state inspection", "He dumped toxic waste drums in the park", "The plant had a nuclear meltdown", "He polluted a pond, creating a three eyed fish"],
            ["7", "2", "12", "8"],
            ["Cow", "Mule", "Monkey", "Baby"],
            ["Brockway", "Hammond", "North Haverbrook", "Ogdenville"],
            ["Drinking all the Duff at the Duff Brewery", "Owning the Denver Broncos", "Running out on the field during a baseball game", "Winning a hot dog eating contest"],
            ["HomerJr", "HomeJr", "Hoju", "Hombart"],
            ["Possums", "Squirrels", "Hobos", "Cats"],
            ["Mark Hamill", "William Shatner", "Patrick Stewart", "Leonard Nimoy"],
            ["A giant donut", "Solar eclipse", "50 foot magnifying glass", "Bart"]
        ];
        
        var imageArray = ["<img class='center-block img-right' src='assets/images/1.jpg'>", "<img class='center-block img-right' src='assets/images/2.jpg'>", "<img class='center-block img-right' src='assets/images/3.jpg'>", "<img class='center-block img-right' src='assets/images/4.jpg'>", "<img class='center-block img-right' src='assets/images/5.jpg'>", "<img class='center-block img-right' src='assets/images/6.jpg'>", "<img class='center-block img-right' src='assets/images/7.jpg'>", "<img class='center-block img-right' src='assets/images/8.jpg'>", "<img class='center-block img-right' src='assets/images/9.jpg'>", "<img class='center-block img-right' src='assets/images/10.jpg'>"];
        var correctAnswers = ["A. Meet the Flintstones", "B. He dumped toxic waste drums in the park", "D. 8", "B. Mule", "B. Hammond", "C. Running out on the field during a baseball game", "C. Hoju", "A. Possums", "D. Leonard Nimoy", "A. A giant donut"];
        var questionCounter = 0;
        var selecterAnswer;
        var theClock;
        var correctTally = 0;
        var incorrectTally = 0;
        var unansweredTally = 0;

}); 
