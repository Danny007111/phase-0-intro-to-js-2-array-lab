// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
};

function destructivelyPrependCat(name){
    cats.unshift(name);
};

function destructivelyRemoveLastCat(){
    cats.pop();
};

function destructivelyRemoveFirstCat(){
    cats.shift();
};

function appendCat(name){
    const cat1 = [...cats, name]; 
    return cat1;
};

function prependCat(name){
    const cat2 = [name, ...cats];
    return cat2;
};

function removeLastCat(){
    const cat3 = cats.slice(0, cats.length -1)
    return cat3;
};

function removeFirstCat(){
    const cat4 = cats.slice(1)
    return cat4;
};