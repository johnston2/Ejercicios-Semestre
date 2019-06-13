function convert() {
    let g = document.getElementById("volumen").value
    let o = g*3.785;
    document.getElementById("out").innerHTML = o.toFixed(2) + " litros"
    }