const checkBtn = document.getElementById('check');
const resetBtn = document.getElementById('reset');
const startBtn = document.getElementById('start');
const ingredients = document.querySelectorAll('.ingredients-list li');
const inputIngredient = document.getElementById('input-ingredient');

function getPoints() {
  let points = 0;

  ingredients.forEach((ingredient) => {
    if (!ingredient.classList.contains('hidden')) {
      points++;
    }
  });

  return points;
}

startBtn.addEventListener('click', () => {
  startBtn.classList.toggle('hidden');
  ingredients.forEach((ingredient) => ingredient.classList.toggle('hidden'));

  checkBtn.classList.toggle('hidden');
  resetBtn.classList.toggle('hidden');
  inputIngredient.classList.toggle('hidden');
});

checkBtn.addEventListener('click', () => {
  const input = inputIngredient.value.toLowerCase().trim();

  ingredients.forEach((ingredient) => {
    const points = getPoints();
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    result.textContent = `${points}/5`;

    if (ingredient.textContent.toLowerCase() === input) {
      ingredient.classList.remove('hidden');
      inputIngredient.value = '';
    }
  });

  if (getPoints() === 5) {
    inputIngredient.classList.toggle('hidden');
    checkBtn.classList.toggle('hidden');
    document.getElementById('result').style.backgroundColor = 'green';
    document.getElementById('result').textContent = `${points}/5`;  
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !checkBtn.classList.contains('hidden')) {
    checkBtn.click();
  }
});
