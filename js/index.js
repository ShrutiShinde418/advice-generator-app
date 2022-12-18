console.log("Connected!");
const number = document.getElementById("advice-no");
const adviceText = document.getElementById("advice-text");
const fetchBtn = document.getElementById("fetch");

const fetchAdvice = async () => {
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      number.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
    })
    .catch((error) => {
      number.textContent = 0;
      adviceText.textContent =
        "Sorry, there was some error while fetching advice.";
    });
};

fetchBtn.addEventListener("click", fetchAdvice);
