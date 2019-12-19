function calculate() {
    var fahrCtrl = document.getElementById("fahr");
    var celCtrl = document.getElementById("cel");
    var input = fahrCtrl.value;
    input = input * 9 / 5 + 32;
    celCtrl.value = input;
}