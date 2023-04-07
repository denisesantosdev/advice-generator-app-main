const updateAdviceBtn = document.querySelector(".dice-btn");
const adviceIdNumber = document.querySelector("#advice-id-number");
const adviceText = document.querySelector(".advice-text");

updateAdviceBtn.addEventListener("click", getAdviceData);

/* async function getAdviceData() {
  const url = `https://api.adviceslip.com/advice`;

  const response = await fetch(url);
  const data = await response.json();

  displayAdvice(data); 
} */

// o mesmo que
function getAdviceData() {
  const url = `https://api.adviceslip.com/advice`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayAdvice(data);
    });
}

getAdviceData();

function displayAdvice(data) {
  const advice = data.slip.advice;
  const adviceId = data.slip.id;

  adviceIdNumber.innerHTML = adviceId;
  adviceText.innerHTML = `"${advice}"`;
}
