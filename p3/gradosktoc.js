function convert() {
    let g = document.getElementById("grados").value
    let o = g-273.15; 
    document.getElementById("out").innerHTML = o.toFixed(2) + " grados"
    }