
function convert(celcius) {
    var fahrenheit = Math.floor((9 * celcius / 5) + 32);
    return fahrenheit;
}

document.getElementById("buttons").onclick = function() {

    var temp = document.getElementById("input").value;

    if(temp==""){
        alert("The value entered is invalid!")
    }
    else{
        document.getElementById("ans").innerHTML = convert(temp);
    }    
}



