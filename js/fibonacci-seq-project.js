const calculate = () => {
    let inptCtrl = document.getElementById("amount");
    let fib = [1,1];
    let amount = inptCtrl.value-1;
    for(let i=1;i<amount;i++){
        let total = fib[i-1]+fib[i];
        fib.push(total);
    }
    let sum = 0;
    fib.map(num => sum += num);
    let h3Ctrl = document.getElementById("ans");
    h3Ctrl.innerHTML=fib.join(", ");
    let h2Ctrl = document.getElementById("sum");
    h2Ctrl.innerHTML=`The total of for all the numbers is ${sum}`
}