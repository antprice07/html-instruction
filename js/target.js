const loaded =()=>{
    let urlParms = getUrlParms();
    console.log(urlParms);
    //get access to the control
    let lblCtrl = document.getElementById("name");
    lblCtrl.innerHTML = `<p>${urlParms.name}</p>`
}
