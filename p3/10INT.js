function int() {
    let random = "";
    for(let i = 0; i < 10; i++){
  random = random + "\n" + (Math.floor((Math.random() * 10) + 1)).toString();
}
document.getElementById("texto").innerHTML = random;
}