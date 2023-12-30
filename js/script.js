function luas() {
  document.getElementById("luas").style.display = "inline-block";
  document.getElementById("kll").style.display = "none";
}
function keliling() {
  document.getElementById("kll").style.display = "inline-block";
  document.getElementById("luas").style.display = "none";
}
inputan = document.getElementById("alas");
masukan = document.getElementById("tinggi");
masukan.onkeydown = function (event) {
  if (isNaN(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};
inputan.onkeydown = function (event) {
  if (isNaN(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};
function hasil() {
  if (inputan.value.length > 0 && masukan.value.length > 0) {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let luas = (alas * tinggi) / 2;
    document.getElementById("resa").innerHTML = alas;
    document.getElementById("rest").innerHTML = tinggi;
    document.getElementById("ls").innerHTML = luas;
    document.getElementById("result").style.display = "flex";
    document.getElementById("result").style.margin = "10px";
  } else {
    return false;
  }
}
deret = document.getElementById("sisi");
deret2 = document.getElementById("sisi2");
deret3 = document.getElementById("sisi3");
deret.onkeydown = function (event) {
  if (isNaN(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};
deret2.onkeydown = function (event) {
  if (isNaN(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};
deret3.onkeydown = function (event) {
  if (isNaN(event.key) && event.key != "Backspace") {
    event.preventDefault();
  }
};
function hasil2() {
  if (
    deret.value.length > 0 &&
    deret2.value.length > 0 &&
    deret3.value.length > 0
  ) {
    let sisi = document.getElementById("sisi").value;
    let sisi2 = document.getElementById("sisi2").value;
    let sisi3 = document.getElementById("sisi3").value;
    let kll = parseInt(sisi) + parseInt(sisi2) + parseInt(sisi3);
    document.getElementById("s1").innerHTML = sisi;
    document.getElementById("s2").innerHTML = sisi2;
    document.getElementById("s3").innerHTML = sisi3;
    document.getElementById("kl").innerHTML = kll;
    document.getElementById("result2").style.display = "flex";
    document.getElementById("result2").style.margin = "10px";
  } else {
    return false;
  }
}
function retry() {
  document.getElementById("result").style.display = "none";
  document.getElementById("result2").style.display = "none";
}
