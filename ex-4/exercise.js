// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function ageCalculator() {
    birthYear = prompt("Please put your Birthday year");
    actualYear = new Date();
    age = actualYear.getFullYear()-birthYear
    return "Your age is " + age
}

window.alert(ageCalculator())
window.alert(ageCalculator())
