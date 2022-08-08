import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector(".form"),
  delayEl: document.querySelector("[name=delay]"),
  stepEl: document.querySelector("[name=step]"),
  amountEl: document.querySelector("[name=amount]"),
};

refs.formEl.addEventListener('submit', onBtn);



function onBtn(event) {
  event.preventDefault();
  console.log(refs);
  const amount = Number(refs.amountEl.value);
  const firstDelay = Number(refs.delayEl.value);
  const step = Number(refs.stepEl.value);
  let delay = firstDelay;

  for (let position = 1; position <= amount; position++) {

    createPromise(position, delay)
      .then(({position, delay}) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay});
        }
        reject({position, delay});
      }, delay);
    });
  };


