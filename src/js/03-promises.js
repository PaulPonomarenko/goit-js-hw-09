const form = document.querySelector('.form');

// Функція відправки рмфои
// Достаємо значення інпутів і приводимо до числа// Робимо перевірку на пусті інпути - це додатково
// Відключаємо кнопку і інпути
// Робимо перебор з amount
// Очищаємо форму
//Відображуємо кнопку і інпути після заверщення - використовуємо “setInterval”
// Вішаємо слухача події

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
