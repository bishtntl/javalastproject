function demo(){
    console.log("hello")
    return function sample(){
        console.log("welcome");

    }
}
var value = demo();
value()


var x=21;
var girl=function(){
    console.log(x);
    var x=20
}
girl()

let y= 21;
girl();
console.log(y)
function girl(){
    console.log(y);
    var y=20
}