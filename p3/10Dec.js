function random() {
    let random = "";
      for(let i = 0; i < 10; i++){
    random = random + "\n" + ((Math.random() * 1) + 0).toString();
  }

  document.getElementById("texto").innerHTML = random;

  }