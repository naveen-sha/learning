const quotes = [
  "nishu chapri hai padhna likhna kuch ni bas lptop lelega ata jata kuch nhi hai. "
];

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

let timer = 0;
let interval = null;
let startTime = null;
let currentQuote = "";

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderQuote(quote) {
  quoteDisplay.innerHTML = "";
  quote.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteDisplay.appendChild(span);
  });
}

function startTimer() {
  startTime = new Date();
  interval = setInterval(() => {
    timer = Math.floor((new Date() - startTime) / 1000);
    timerEl.innerText = timer;
    updateStats();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function updateStats() {
  const typed = quoteInput.value;
  const totalWords = typed.trim().split(/\s+/).length;
  const correctChars = getCorrectCharCount();
  const accuracy = Math.round((correctChars / currentQuote.length) * 100);

  const timeInMin = timer / 60 || 1; // Avoid divide by 0
  const wpm = Math.round(totalWords / timeInMin);

  wpmEl.innerText = wpm;
  accuracyEl.innerText = `${accuracy}%`;
}

function getCorrectCharCount() {
  const input = quoteInput.value;
  let correct = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === currentQuote[i]) correct++;
  }
  return correct;
}

quoteInput.addEventListener("input", () => {
  const input = quoteInput.value;
  const spanArray = quoteDisplay.querySelectorAll("span");
  
  let correct = true;

  spanArray.forEach((span, index) => {
    const char = input[index];
    if (char == null) {
      span.classList.remove("correct", "incorrect");
      correct = false;
    } else if (char === span.innerText) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
      correct = false;
    }
  });

  updateStats();

  if (input === currentQuote) {
    stopTimer();
    quoteInput.disabled = true;
    nextBtn.disabled = false;
  }
});

function initTest() {
  currentQuote = getRandomQuote();
  renderQuote(currentQuote);
  quoteInput.value = "";
  quoteInput.disabled = false;
  quoteInput.focus();
  timer = 0;
  timerEl.innerText = "0";
  wpmEl.innerText = "0";
  accuracyEl.innerText = "0%";
  nextBtn.disabled = true;
  stopTimer();
  startTimer();
}

startBtn.addEventListener("click", initTest);
nextBtn.addEventListener("click", initTest);
