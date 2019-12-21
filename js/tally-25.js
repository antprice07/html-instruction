function display(){
    //get <p> access
    let pCtrl = document.getElementById("total");
    let total = 0;
    for(let i = 1;i<=25;i++){
        if(i%3===0){
            total+=i;
        }else if(i%5===0){
            total+=i;
        }else if(i%7===0){
            total+=i;
        }else {
            continue;
        }
    }
    pCtrl.innerHTML=total;
}
//Can also be: const loaded = () => {display() }
function loaded(){
    display();
}

