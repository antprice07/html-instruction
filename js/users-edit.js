const baseUrl = "http://localhost:8080";
let user = null;

$().ready(()=>{

    get(1);

    $("#save").click(()=>{
        update();
    })
})

const update = () => {
    user.username = $("#puname").val();
    user.password = $("#ppword").val();
    user.firstName = $("#pfname").val();
    user.lastName = $("#plname").val();
    user.phone = $("#pphone").val();
    user.email = $("#pemail").val();
    user.reviewer = $("#previewer").prop("checked");
    user.admin = $("#padmin").prop("checked");
    put();
}

const put = () =>{
    $.ajax({
        method: "PUT",
        url: `${baseUrl}/users/${user.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        contentType: "application/json"
    }).done(()=>{
        console.log(user);
        get(user.id);
    });
}

const get = (id)  => {
    $.getJSON(`${baseUrl}/users/${id}`)
        .done((res)=>{
            console.log("User:",res.data);
            user = res.data;
            display();
        });
}

const display = () => {
    $("#pid").val(user.id);
    $("#puname").val(user.username);
    $("#ppword").val(user.password);
    $("#pfname").val(user.firstName);
    $("#plname").val(user.lastName);
    $("#pphone").val(user.phone);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked",user.reviewer);
    $("#padmin").prop("checked",user.admin);
}