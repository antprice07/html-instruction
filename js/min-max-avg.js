console.log("Eureeka!");

let nbrs = [96, 59, 4, 68, 58, 48, 17, 76, 32, 71, 11, 6, 3, 32, 85, 13, 60, 1, 27, 15, 96, 31, 75, 5, 2];

function display() {
    let minCtrl = document.getElementById("min");
    let maxCtrl = document.getElementById("max");
    let avgCtrl = document.getElementById("avg");

    nbrs.sort();
    minCtrl.innerHTML = nbrs[0];
    console.log(nbrs[0]);
    maxCtrl.innerText = nbrs[nbrs.length - 1];
    let avg = 0;
    for (let nbr of nbrs) {
        nbr += nbr;
        avg = nbr / nbrs.length
    }
    avgCtrl.innerText = avg;

}

function loaded() {
    display();
}

