const baseUrl = "http://localhost:8080";
let users = null;

$().ready(() => {

    $("#getall").click(() => {
        console.log("Before ajax call");
        $.getJSON(`${baseUrl}/users/`)
            .done((res) => {
                console.log("after data comes back");
                users = res.data;
                display();
            }).fail((err) => {
                console.error(err);
            });
        console.log("after ajax call");
    });


});

const display = () => {
    $("thead").html("<tr>" +
        "<td>Id</td>" +
        "<td>Username</td>" +
        "<td>Password</td>" +
        "<td>First Name</td>" +
        "<td>Last Name</td>" +
        "<td>Phone</td>" +
        "<td>Email</td>" +
        "</tr>");
    $("tbody").html("");
    for (let user of users) {
        let id = $(`<td>${user.id}</td>`);
        let uname = $(`<td>${user.username}</td>`);
        let password = $(`<td>${user.password}</td>`);
        let fname = $(`<td>${user.firstName}</td>`);
        let lname = $(`<td>${user.lastName}</td>`);
        let phone = $(`<td>${user.phone}</td>`);
        let email = $(`<td>${user.email}</td>`);
        let tr = $("<tr></tr>");
        tr.append(id);
        tr.append(uname);
        tr.append(password);
        tr.append(fname);
        tr.append(lname);
        tr.append(phone);
        tr.append(email);
        $("tbody").append(tr);
    }
}