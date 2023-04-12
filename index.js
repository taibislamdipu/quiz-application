function nextQuestion() {
  currentQuestion++;
  console.log("Current question:", currentQuestion);
  displayQuestion();
}

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
