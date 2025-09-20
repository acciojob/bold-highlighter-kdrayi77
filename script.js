function highlight() {
  // Select all <strong> elements
  const boldWords = document.querySelectorAll('strong');
  
  // Change their color to green
  boldWords.forEach(function (word) {
    word.style.color = 'rgb(0, 128, 0)';
  });
}

function return_normal() {
  // Select all <strong> elements
  const boldWords = document.querySelectorAll('strong');
  
  // Revert their color to black
  boldWords.forEach(function (word) {
    word.style.color = 'rgb(0, 0, 0)';
  });
}
