let rating = 0;
const submit = document.getElementById("submit");
const text = document.getElementById("ratingInfo");
const fs = document.getElementById("firstSection");
const ss = document.getElementById("secondSection");
function clickedBtn(clicked) {
  rating = document.getElementById(clicked).innerText;
  submit.disabled = false;
  return rating;
}
if (rating === 0) {
  submit.disabled = true;
}
submit.addEventListener("click", () => {
  text.innerText = `You selected ${rating} out of 5`;
  if (rating !== 0) {
    fs.style.display = "none";
    ss.style.display = "block";
  }
});
