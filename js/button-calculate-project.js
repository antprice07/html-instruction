var nbr = 0;
        function minus(){nbr--;display()}
        function add(){nbr++;display()}
        function display() {
            var inpCtrl = document.getElementById("nbr");
            inpCtrl.value=nbr;
            nbr%3==0 ? inpCtrl.style.color="red":inpCtrl.style.color="black";
            nbr%5==0 ? inpCtrl.style.fontWeight="bold":inpCtrl.style.fontWeight="normal";
            nbr%7==0 ? inpCtrl.style.fontStyle="italic":inpCtrl.style.fontStyle="normal";
        }