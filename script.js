let currentAnswer = 0;

function generateFlashcard(type) {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let question = '';

  if (type === 'add') {
    currentAnswer = num1 + num2;
    question = `${num1} + ${num2} = ?`;
  } else {
    currentAnswer = num1 - num2;
    question = `${num1} - ${num2} = ?`;
  }

  document.getElementById('question').textContent = question;
  document.getElementById('feedback').textContent = '';
  document.getElementById('answer').value = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const feedback = document.getElementById('feedback');
  const flashcard = document.querySelector('.flashcard');

  if (userAnswer === currentAnswer) {
    feedback.textContent = '🎉 Correct!';
    flashcard.classList.add('sparkle');
    setTimeout(() => flashcard.classList.remove('sparkle'), 1000);
  } else {
    feedback.textContent = 'Try again!';
  }
}

// ✅ Event listeners
document.getElementById('addBtn').addEventListener('click', () => generateFlashcard('add'));
document.getElementById('subtractBtn').addEventListener('click', () => generateFlashcard('subtract'));
document.getElementById('submitBtn').addEventListener('click', checkAnswer);

// ✅ Optional: Press Enter to submit
document.getElementById('answer').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});
