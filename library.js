var idx=1,id=5;
var logged=false;
let logged_user = ""
document.getElementById("logged-in-user-name").innerHTML = "No user logged in"
let books_data=[
    {id: 1, name: "book1", user: "A", lender: "A", borrower: "B", action: ""},
    {id: 2, name: "book2", user: "B", lender: "B", borrower: "", action: ""},
    {id: 3, name: "book3", user: "C", lender: "C", borrower: "A", action: ""},
    {id: 4, name: "book4", user: "D", lender: "D", borrower: "C", action: ""}
]
let users = ["A","B","C","D"];

function changeLoggedInUser(){
    var user = document.getElementById("logged-user").value
    if(user!=null && !logged){
        for(var i=0;i<users.length;i++){
            if(users[i]===user){
                logged=true;
                logged_user = user
                document.getElementById("logged-in-user-name").innerHTML = user;
                add_new();
                break;
            }
        }
    }
}
function add_new(){
    document.getElementById("info-table").insertRow(idx++).innerHTML = `<tr><td></td><td><input type="text" id="titlenew" placeholder="title" required></input></td><td><input type="text" id="authornew" placeholder="author" required></input></td><td>${logged_user}</td><td>-</td><td><button type="button" onclick="insert()">Add</button></td></tr>`
    after_login(true);
}
function insert(){
    var title = document.getElementById("titlenew");
    var author = document.getElementById("authornew");
    let table = document.getElementById("info-table")
    books_data.push(id,title,author,logged_user,"","");
    var row = table.insertRow(idx-1)
    idx++;
    var new_id = row.insertCell(0)        
    var new_name = row.insertCell(1)        
    var new_user = row.insertCell(2)        
    var new_lender = row.insertCell(3)        
    var new_borrower = row.insertCell(4)
    var new_action = row.insertCell(5)
    new_id.innerHTML = id++
    new_name.innerHTML = title.value
    new_user.innerHTML = author.value
    new_lender.innerHTML = logged_user
    new_borrower.innerHTML = ""
}
if(1){
    let table = document.getElementById("info-table")
    for(var i=0;i<books_data.length;i++){
        var row = table.insertRow(idx++)
        var new_id = row.insertCell(0)        
        var new_name = row.insertCell(1)        
        var new_user = row.insertCell(2)        
        var new_lender = row.insertCell(3)        
        var new_borrower = row.insertCell(4)
        var new_action = row.insertCell(5)
        new_id.innerHTML = books_data[i].id
        new_name.innerHTML = books_data[i].name
        new_user.innerHTML = books_data[i].user
        new_lender.innerHTML = books_data[i].lender
        new_borrower.innerHTML = books_data[i].borrower
        new_action.innerHTML = ""
    }
}
function borrower(idx){
    let table = document.getElementById("info-table")
    let row = table.rows[idx];
    row.cells[5].innerHTML = `<button onclick="returner(${idx})">Return</button>`
    row.cells[4].innerHTML = logged_user;
}
function returner(idx){
    let table = document.getElementById("info-table")
    let row = table.rows[idx];
    row.cells[5].innerHTML = `<button onclick="borrower(${idx})">Borrow</button>`
    row.cells[4].innerHTML = "";
}
function after_login(check){
    let table = document.getElementById("info-table")
    for(let i =1; i<table.rows.length-1;i++){
        let row = table.rows[i];
        if(row.cells[4].innerHTML==="" && check && row.cells[3].innerHTML!=logged_user){
            console.log(row.cells[4].innerHTML);
            row.cells[5].innerHTML = `<button onclick="borrower(${i})">Borrow</button>`
        }
        else if(row.cells[4].innerHTML===logged_user){
            row.cells[5].innerHTML = `<button onclick="returner(${i})">Return</button>`
        }
    }
}