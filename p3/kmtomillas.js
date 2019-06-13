function convert() {
    let m = document.getElementById("medida").value
    let o = m/1.609; 
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas"
    }