import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
    timeout: 11000,
});

const form = document.querySelector('.form');
// const delayEl = document.querySelector('[name="delay"]');
// const stepEl = document.querySelector('[name="step"]');
// const amountEl = document.querySelector('[name="amount"]');
// const btnSubmit = document.querySelector('[type="submit"]');
// let position = 0;


// console.log(`form`);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    let { delay, step, amount } = e.currentTarget;

    delay = Number(delay.value);
    step = Number(step.value);
    amount = Number(amount.value);

    // console.log(delay);
    // console.log(step);
    // console.log(amount);

    for (let position = 1; position <= amount; position++) {
        createPromise(position, delay)
            .then(({ position, delay }) => {
                Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
        delay += step;
    }

};

function createPromise(position, delay) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const shouldResolve = Math.random() > 0.3;

            if (shouldResolve) {
                // Fulfill
                resolve({ position, delay });
            } else {
                // Reject
                reject({ position, delay });
            }
        }, delay)
    });
};







