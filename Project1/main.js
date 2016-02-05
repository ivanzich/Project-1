// Click the start button to start the game 


$("#start").click(function() {
	// Populate the game
	getRandomQuestion();
	populate();
	// Countdown timer set up and set it to start when the `Start` button is clicked.
	function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Trivia Quiz Is Over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) +
                ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

	countdown("countdown", 1, 0);
});
$(document).ready(function() {
	$("button").effect();
});


// populate function
var populate = function() {
	var $questionspace = $("#questionspace");
	var $answer1 = $("#1");
	var $answer2 = $("#2");
	var $answer3 = $("#3");
	var $answer4 = $("#4");	
	$questionspace.text(questionList[currentQuestion][0]);
	$answer1.text(questionList[currentQuestion][1]);
	$answer2.text(questionList[currentQuestion][2]);
	$answer3.text(questionList[currentQuestion][3]);
	$answer4.text(questionList[currentQuestion][4]);
};


var currentQuestion;


// list with questions


var questionList = [
[" Which of the following languages is more suited to a structured program?", "PL1", "BASIC", "FORTRAN", "PASCAL"],
[" A computer assisted method for the recording and analyzing of existing or hypothetical systems is?", "Data transmission", "Data flow", "Data capture", "Data processing"],
[" The brain of any computer system is", "ALU", "Memory", "CPU", "Control unit"],
[" What difference does the 5th generation computer have from other generation computers?", "Technological advancement", "Scientific code", "Object Oriented Programming", "Superior"],
[" Which of the following computer language is used for artificial intelligence?","FORTRAN", "PROLOG", "COBOL"], 
[" A section of code to which control is transferred when a processor is interrupted is known as ?", "M ", "SVC", "IP", "MDR"],
[" The binary system uses powers of?", " 2", "10", "8", "16"],
[" A computer program that converts assembly language to machine language is ?", "Compiler", "Interpreter", "Assembler", "Comparator"],
[" The time required for the fetching and execution of one simple machine instruction is?", "Delay Time", "CPU cycle", "Real time" , "Seek time"],
[" The time for which a piece of equipment operates is called?", "Seek time", "Effective time", "Access time", "Real time"],
[" The section of the CPU that selects, interprets and sees to the execution of program instructions?", "Memory", "Register unit", "Control unit", "ALU"],
[" A common boundary between two systems is called ?", "Interdiction", "Interface", "Surface", "None of the above"],
[" The examination and changing of single bits or small groups of his within a word is called ?", "Bit", "Byte", "Bit manipulation", "Bit slice"],
[" The symbols used in an assembly language are ?", "1. Codecs","2. Mnemonics", "3. Assembler", "4. All of the above"],
[" The 2's complement of a binary no. is obtained by adding.....to its 1's complement.", "0", "1", "10", "12"],
[" From what location are the 1st computer instructions available on boot up?" , "ROM BIOS", "CPU", "boot.ini", "ONFIG.SYS"],
[" With respect to a network interface card, the term 10/100 refers to ?","Protocol speed", "a fiber speed", "megabits per seconds", "minimum and maximum server speed"],
[" Which type of system board is the MOST likely candidate for processor upgrading if you want maximum performance and future compatibility?", "ML", "PCI", "ISA", "EISA"],
[" Which of the following is not a disadvantage of wireless LAN?", "Slower data transmission","Higher error rate", "interference of transmissions from different computers", "All of the above"],
["Which of the following TCP/IP protocol is used for transferring electronic mail messages from one machine to another?", "FTP", "SNMP", "SMTP", "RPC"], 
["What device separates a single network into two segments but lets the two segments appear as one to higher protocols?", "Switch", "Gateway", "Bridge", "Router"],


];

// Answer key for the questions list
var answerKey = [4,2,3,1,2,1,3,3,2,2,3,3,2,2,1,3,2,4,3,2];


/* Generates a random question */
var getRandomQuestion = function() {
	currentQuestion = Math.floor(Math.random() * questionList.length);	
};

// Click one of the four possible answers 
$(".answers").on('click', function() {
	var answerNum =	$(this).attr("id");
	winner(answerNum);
});

// Checks for a correct answer and populates the next random question if correct.
var winner = function(answerNum) {
	console.log(currentQuestion);
	console.log(answerKey[currentQuestion]);
	if (answerKey[currentQuestion] == answerNum) {
		getRandomQuestion();
		populate();
		
	}	else  {
		alert("Wrong answer. Try again.")
	}
};	
