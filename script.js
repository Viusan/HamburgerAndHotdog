var dropDownEL = document.getElementById('fooddropdown');
var foodDivEl = document.getElementById('fooddiv');
dropDownEL.addEventListener('change', dropDownSelected);

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
    <label for="choice2">Mustard</label>
    <input type="radio" name="foodchoice" id="choice3">
    <label for="choice3">Ketchup</label>
    `
  }
}