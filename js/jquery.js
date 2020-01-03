$().ready(()=>{
    console.log("jquery ready");
    $("#abc").val("Java PT BC");

    $("#clk").click(()=>{
        console.log($("#abc").val());
    })

    $("#sty").click(()=>{
        $("#abc").css("color","red");
    })
})
