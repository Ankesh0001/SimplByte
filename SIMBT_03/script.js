const quizData = [
    {
      question: "What is the capital of INDIA?",
      choices: ["Mumbai", "Kolkata", "Gujrat", "New Delhi"],
      correctAnswer: 1
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: 1
    },
    {
        question: "Which country is the largest country in the world?",
        choices: ["China", "Canada", "Russia", "India"],
        correctAnswer: 1
      },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Earth", "Mars"],
      correctAnswer: 0
    }
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const resultContainer = document.getElementById("result-container");
  const resultElement = document.getElementById("result");
  const restartButton = document.getElementById("restart-btn");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const quizItem = quizData[currentQuestion];
    questionElement.textContent = quizItem.question;
    
    choicesElement.innerHTML = "";
    quizItem.choices.forEach((choice, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <input type="radio" name="choice" value="${index}">
        <label>${choice}</label>
      `;
      choicesElement.appendChild(listItem);
    });
  }
  
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
  }
  
  function checkAnswer() {
    const selectedChoice = document.querySelector(
      'input[name="choice"]:checked'
    );
    if (selectedChoice) {
      const answer = Number(selectedChoice.value);
      if (answer === quizData[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
  }
  
  // Event listeners
  choicesElement.addEventListener("change", checkAnswer);
  restartButton.addEventListener("click", restartQuiz);
  
  // Initial question display
  showQuestion();
  