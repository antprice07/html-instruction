let myscore = 20;
let oppscore = 20;

const loser = () => {
    myscore--;
    oppscore++;
    let osCtrl = document.getElementById("oppscore");
    osCtrl.innerText = oppscore;
    let msCtrl = document.getElementById("myscore");
    msCtrl.innerText = myscore;
}

const winner = () => {
    myscore++;
    oppscore--;
    let osCtrl = document.getElementById("oppscore");
    osCtrl.innerText = oppscore;
    let msCtrl = document.getElementById("myscore");
    msCtrl.innerText = myscore;
}

const play = () => {
    let num = Math.floor(Math.random()* 10)+1;
    let scoreCtrl = document.getElementById("score");
    scoreCtrl.value = num;
}

const resetScore = () => {
    let scoreCtrl = document.getElementById("score");
    scoreCtrl.value = "";
}