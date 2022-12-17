const dice = document.querySelector(".dice");
const adviceText = document.querySelector(".advice-text");
const id = document.querySelector(".advice-id");
// dice.addEventListener("click", function () {
//   fetch("https://api.adviceslip.com/advice")
//     .then((res) => res.json())
//     .then((data) => {
//       adviceText.textContent = data.slip.advice;
//       id.textContent = data.slip.id;
//     });
// });

const random = function () {
  return Math.floor(Math.random() * 200) + 1;
};
dice.addEventListener("click", function () {
  fetch(`https://api.adviceslip.com/advice/${random()}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      adviceText.textContent = data.slip.advice;
      id.textContent = data.slip.id;
    })
    .catch((err) => {
      adviceText.textContent = err.message;
    });
});
