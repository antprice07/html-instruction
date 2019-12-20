console.log("Eureeka! It works!");
let names = [
    {name: "Karlee",bday: "10/30", favColor: "Aqua",favNbr: 7}, 
    {name: "Fred",bday:"3/16", favColor: "Green",favNbr: 9}, 
    {name: "Anthony",bday: "12/15", favColor: "Red",favNbr: 10}, 
    {name: "Joelle",bday: "5/9", favColor: "Blue",favNbr: 76}, 
    {name: "Brytt",bday:"11/14", favColor: "Blue",favNbr: 21}];
function sortFn(a,b){
    if(a.favNbr === b.favNbr){
        return 0;
    } 
    return a.favNbr < b.favNbr ? -1 : 1;
}
function display() {
    let tableCtrl = document.getElementById("names");
    for (let u of names) {
        let tr = "<tr> <td>" +u.name+"</td><td>" +u.bday+"</td> <td>"+u.favColor+"</td> <td>"+u.favNbr+ "</td> </tr>";
        tableCtrl.innerHTML += tr;
    }
}

function loaded() {
    display();
}