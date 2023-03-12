const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}

function appendCat(name){
    let catsCopy1 = [...cats,name];
    return catsCopy1;
}

function prependCat(name){
    let catsCopy2 = [name,...cats];
    return catsCopy2;
}

function removeLastCat(){
    let catscopy3 = cats.slice(0,cats.length-1)
    return catscopy3;
}

function removeFirstCat(){
    let catscopy4 = cats.slice(1)
    return catscopy4;
}