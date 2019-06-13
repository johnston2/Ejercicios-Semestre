function convert() {
    let e = document.getElementById("cambio").value
    let o = e*1.13;
    document.getElementById("out").innerHTML = o.toFixed(2) + " dolars"
    }