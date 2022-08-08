import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector(".form"),
  delay: document.querySelector("[name=delay]"),
  step: document.querySelector("[name=step]"),
  amount: document.querySelector("[name=amount]"),
};

refs.formEl.addEventListener('submit', onBtn);

const amount = refs.amount.value;
const delay = ref.delay.value;
const step = refs.step.value;

function onBtn(event) {
  event.preventDefault();
  console.log(refs);
  // let position = refs.amount.value;
  for (let i = 0; i <= amount; i++) {
    let delayStep = delay + i * step;
    createPromise(i, delayStep)
      .then(({i, delayStep}) => {
        console.log(`✅ Fulfilled promise ${i} in ${delayStep}ms`);
      })
      .catch(({i, delayStep}) => {
        console.log(`❌ Rejected promise ${i} in ${delayStep}ms`);
      });
  }
}
// Notiflix.Notify.success
// Notiflix.Notify.failure

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }

        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay);
    });
  };


