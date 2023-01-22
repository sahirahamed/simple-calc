function calc(){

var a = parseInt(document.querySelector('#n1').value);
var b = parseInt(document.querySelector('#n2').value);
var oper =document.querySelector('#operators').value;

var calculate;
if(oper == "Add"){
calculate = a+b;

}else if(oper == "Subract"){
    calculate = a-b;
}
else if(oper == "Multiply"){
    calculate = a*b;
}
else if(oper == "Divide"){
    calculate = a/b;
}

document.querySelector('#result').innerHTML= calculate;

}