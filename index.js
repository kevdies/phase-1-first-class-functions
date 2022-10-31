function receivesAFunction(callback) {
    let word = "kevin";
    return callback(word);
}

function returnsANamedFunction() {
    const myFunction = function(){
        console.log("HI");
    }
    return myFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("HIIII");
    };
}
