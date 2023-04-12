// function for loading next question
// function nextQuestion() {
//   currentQuestion++;
//   console.log("Current question:", currentQuestion);
//   displayQuestion();
// }

var userAnswers = [];

function getSelectedOption() {
  var optionInputs = document.getElementsByName("option");
  for (var i = 0; i < optionInputs.length; i++) {
    if (optionInputs[i].checked) {
      return i;
    }
  }
  return null;
}

function nextQuestion() {
  // Save the user's answer
  var selectedOption = getSelectedOption();
  if (selectedOption !== null) {
    userAnswers[currentQuestion] = selectedOption;
  }

  // Move to the next question
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// quiz data
var currentQuestion = 0;
var quizData = [
  {
    question: "Question 1",
    options: ["Option 1 fdfsdff", "Option 2sdfsfsf", "Option 3", "Option 4"],
    correct_option: 2,
  },
  {
    question: "Question 2",
    options: ["Option 1 sdfsdf", "Option 2sdfsff", "Option 3sdfsf", "Option 4"],
    correct_option: 0,
  },
  {
    question: "Question 3",
    options: ["Option 1lkjkl;", "Option 2kl;kl", "Option 3", "Option 4"],
    correct_option: 1,
  },
  {
    question: "Question 4",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct_option: 3,
  },
  {
    question: "Question 5",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct_option: 2,
  },
];

// display quiz function
function displayQuestion() {
  var questionText = quizData[currentQuestion].question;
  var options = quizData[currentQuestion].options;

  document.getElementById("question").innerHTML = questionText;
  for (var i = 0; i < options.length; i++) {
    var optionText = options[i];
    document.getElementById("option" + i).innerHTML = optionText;
  }
}

displayQuestion();

// show results function
function showResults() {
  // Calculate the user's score
  var score = 0;
  for (var i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === quizData[i].answer) {
      score++;
    }
  }

  // Display the user's score
  var scoreText = "You scored " + score + " out of " + quizData.length + ".";
  document.getElementById("score").innerHTML = scoreText;

  // Display the correct answers
  var answersList = document.getElementById("answers");
  for (var i = 0; i < quizData.length; i++) {
    var listItem = document.createElement("li");
    var answerText =
      quizData[i].question + " - " + quizData[i].options[quizData[i].answer];
    listItem.innerHTML = answerText;
    if (userAnswers[i] !== quizData[i].answer) {
      listItem.style.color = "red";
    }
    answersList.appendChild(listItem);
  }
}
