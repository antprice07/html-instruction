const baseUrl = "http://localhost:8080";
let users = null;

$().ready(() => {

    $("#getall").click(() => {

        console.log("Before ajax call");
        $.getJSON(`${baseUrl}/users/`)
            .done((res) => {
                console.log("after data comes back");
                console.log("Data: ", res.data);
                users=res.data;
            }).fail((err)=> {
                console.error(err);
            });
        console.log("after ajax call");
    });


});