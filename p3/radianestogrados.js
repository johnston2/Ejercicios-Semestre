function convert() {
    let r = document.getElementById("unidad").value
    let o = r*180/3.1416;
    document.getElementById("out").innerHTML = o.toFixed(2) + " grados"
    }