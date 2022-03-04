var idx=1,id=5;
var logged=false;
var logged_user = ""
document.getElementById("logged-in-user-name").innerHTML = "No user logged in"
let books_data=[
    {id: 1, name: "A", user: "x", lender: "", borrower: "", action: '<button>Borrow</button>'},
    {id: 2, name: "B", user: "x", lender: "", borrower: "", action: "<button>Borrow</button>"},
    {id: 3, name: "C", user: "x", lender: "", borrower: "", action: "<button>Borrow</button>"},
    {id: 4, name: "D", user: "x", lender: "", borrower: "", action: "<button>Borrow</button>"},
]
let users = ["diviosho","sushant","vicky","mohit","abhinav"];

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
    document.getElementById("info-table").insertRow(idx++).innerHTML = `<tr><td>${id}</td><td><input type="text" id="titlenew" placeholder="title" required></input></td><td><input type="text" id="authornew" placeholder="author" required></input></td><td>${logged_user}</td><td>-</td><td><button type="button" onclick="insert()">Add</button></td></tr>`
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
        new_action.innerHTML = books_data[i].action
    }
}