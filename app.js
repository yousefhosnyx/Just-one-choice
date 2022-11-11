let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let submitBtn = document.getElementById("submitBtn");
let inputdiv = document.querySelector(".inputdiv");
var options = [];

addBtn.addEventListener("click", () => {
  let newOption = document.createElement("INPUT");
  newOption.setAttribute("value", "");
  newOption.setAttribute("placeholder", "What Is In Your Mind :)");
  newOption.classList.add("options");
  inputdiv.appendChild(newOption);
});

deleteBtn.addEventListener("click", () => {
  let inputdiv = document.querySelector(".inputdiv");
  if (inputdiv.children.length === 2) {
    window.alert("Sorry You Can't Remove the last 2 Options");
    return false;
  }
  inputdiv.removeChild(inputdiv.lastChild);
});

submitBtn.addEventListener("click", () => {
  let form = document.querySelector(".form");
  let lastPage = document.querySelector(".lastPage");
  let inputdiv = document.querySelector(".inputdiv");
  for (let i = 0; i < inputdiv.children.length; i++) {
    if (inputdiv.children[i].value === "") {
      window.alert("Sorry this Can't be Empty");
      return false;
    }
    options.push(inputdiv.children[i].value);
  }
  let randomValue = Math.ceil(Math.random() * options.length);
  let finalResult = options[randomValue - 1];
  finalResult = `"${finalResult}"`;
  form.classList.add("hide");
    lastPage.classList.remove("hide");
    let inputs = document.createElement("h2");
    inputs.innerHTML = finalResult;
    
window.setTimeout(() => {
    let msg = document.getElementById("pw");
      msg.innerHTML = "Loading...";
  }, 3000);

  window.setTimeout(() => {
    lastPage.classList.add("hide");
    let result = document.querySelector(".result");
    let congrats = document.createElement("h1");
    congrats.innerHTML = "Congrats, We had Find the Best Option For You :)";
    result.append(congrats);
    result.appendChild(inputs);
  }, 6000);

  options = [];
});