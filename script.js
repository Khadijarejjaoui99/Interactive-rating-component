let rating = 0;
function clickedBtn(clicked) {
  rating = document.getElementById(clicked).innerText;
  return rating;
}
const submit = document.getElementById("submit");
const text = document.getElementById("ratingInfo");
const fs = document.getElementById("firstSection");
const ss = document.getElementById("secondSection");
submit.addEventListener("click", () => {
  text.innerText = `You selected ${rating} out of 5`;
  if (rating !== 0) {
    fs.style.display = "none";
    ss.style.display = "block";
  }
});
