function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=l);var r=l("eWCmQ");const i={formEl:document.querySelector(".form"),delayEl:document.querySelector("[name=delay]"),stepEl:document.querySelector("[name=step]"),amountEl:document.querySelector("[name=amount]")};function u(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t&&n({position:e,delay:o}),l({position:e,delay:o})}),o)}))}i.formEl.addEventListener("submit",(function(o){o.preventDefault(),console.log(i);const t=Number(i.amountEl.value),n=Number(i.delayEl.value),l=Number(i.stepEl.value);let a=n;for(let o=1;o<=t;o++)u(o,a).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),a+=l}));
//# sourceMappingURL=03-promises.20fc2d14.js.map
