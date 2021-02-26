// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function tellfortune(work, location, partner, children){
    this.work = work
    this.location = location
    this.partner = partner
    this.children = children
    this.fortune = function(){
    window.alert("you will be a " + this.work +" in " + this.location +", and married to "+this.partner + "with " +this.children +" kids. ");

    }
}
var work = prompt("your work");
var loc = prompt("where do you want to work");
var partner = prompt("your partner name ");
var children = prompt("how many children you have");

var sohrab = new tellfortune(work, loc, partner, children);
sohrab.fortune()