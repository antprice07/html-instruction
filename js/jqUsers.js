let users = [
    { id: 1, name: "Greg", favColor: "green", favNbr: 8 },
    { id: 2, name: "Anthony", favColor: "red", favNbr: 10 },
    { id: 3, name: "Brytt", favColor: "blue", favNbr: 11 },
    { id: 4, name: "Fred", favColor: "orange", favNbr: 32 },
    { id: 5, name: "Joelle", favColor: "purple", favNbr: 3 }
]

$().ready(() => {

    console.log("jQuery ready!");

    $("#input").append("<td></td>" +
        "<td><input id='name' type='text' value=''></td>" +
        "<td><input id='color' type='text' value=''></td>" +
        '<td><input id="nbr" type="text" value=""></td>' +
        '<td><button id="addUser">Add User</button></td>'
    );
    listUsers();

    $("#addUser").click(() => {
        users.push({
            id: users.length + 1,
            name: $("#name").val(),
            favColor: $("#color").val(),
            favNbr: $("#nbr").val()
        });
        listUsers();
    })
    
    
    
})

const listUsers = () => {
    users.sort((a, b) => (a.favNbr > b.favNbr) ? 1 : -1);
    for (let user of users) {
        let id = $(`<td>${user.id}</td>`);
        let name = $(`<td>${user.name}</td>`);
        let color = $(`<td>${user.favColor}</td>`);
        let number = $(`<td>${user.favNbr}</td>`);
        let tr = $("<tr></tr>");
        tr.append(id);
        tr.append(name);
        tr.append(color);
        tr.append(number);
        $("#list").append(tr);
    }
    $("#name").val("");
    $("#color").val("");
    $("#nbr").val("");
    $("#list").html("");
}