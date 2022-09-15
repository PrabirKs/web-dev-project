

function add(){
var a= parseInt(document.getElementById('in1').value) 
var b = parseInt(document.getElementById('in2').value)
document.getElementById('output').innerHTML = a+b
}

function substract(){
    var a= parseInt(document.getElementById('in1').value) 
    var b = parseInt(document.getElementById('in2').value)
    document.getElementById('output').innerHTML = a-b
}

function multiply(){
    var a= parseInt(document.getElementById('in1').value) 
    var b = parseInt(document.getElementById('in2').value)
    document.getElementById('output').innerHTML = a*b
}

function divide(){
    var a= parseInt(document.getElementById('in1').value) 
    var b = parseInt(document.getElementById('in2').value)
    document.getElementById('output').innerHTML = a/b
}