// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
 }
 
 function destructivelyPrependCat(){
    cats.unshift("Bob");
 }

 function destructivelyRemoveFirstCat(){
    cats.shift();
 }

 function destructivelyRemoveLastCat(){
    cats.pop();
 }

 
 function appendCat(){
    appendCat = [...cats,"Broom"];
    return appendCat;
 }
 function prependCat(){
    prependCat = ["Arnold", ...cats]; 
    return prependCat;
 }

 function removeLastCat() {
    removeLastCat=cats.slice(0,2)
    return removeLastCat
}
function removeFirstCat() {
    removeFirstCat=cats.slice(1)
    return removeFirstCat
}