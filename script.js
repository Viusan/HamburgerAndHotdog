var dropDownEL = document.getElementById('fooddropdown');
var foodDivEl = document.getElementById('fooddiv');
var checkboxEl = document.getElementById('checkbox');
var sliderEl = document.getElementById('slider');

var mustardText = document.getElementById('mustardField');

dropDownEL.addEventListener('change', dropDownSelected);
sliderEl.addEventListener('change', sliderSelected);

function dropDownSelected(e) {
  console.log(e.target.value);
  if(e.target.value == 0){
    foodDivEl.innerHTML = `
    <input type="radio" name="foodchoice" id="choice1">
    <label for="choice1">Hamburger Bread</label>
    <input type="radio" name="foodchoice" id="choice2">
    <label for="choice2">Cucumber</label>
    <input type="radio" name="foodchoice" id="choice3">
    <label for="choice3">Bacon</label>
    `
  }else if(e.target.value == 1){
    foodDivEl.innerHTML = `
    <input type="radio" name="foodchoice" id="choice1">
    <label for="choice1">Hotdog Bread</label>
    <input type="radio" name="foodchoice" id="choice2">
    <label for="choice2">BBQ Sauce</label>
    <input type="radio" name="foodchoice" id="choice3">
    <label for="choice3">Ketchup</label>
    `
  }
}

function sliderFunction() {
  if(checkboxEl.checked == true) {
    sliderEl.disabled = false;
  }else{
    sliderEl.disabled = true;
    mustardText.innerHTML = "";
  }
}

function sliderSelected() {
  mustardText.innerHTML = sliderEl.value/10 + " gram mustard added";
}