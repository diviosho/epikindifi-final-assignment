var idx=1;
let books_data=[
    {id: 1, name: "A", user: "x", lender: "", borrower: "", action: ""},
    {id: 2, name: "B", user: "x", lender: "", borrower: "", action: ""},
    {id: 3, name: "C", user: "x", lender: "", borrower: "", action: ""},
    {id: 4, name: "D", user: "x", lender: "", borrower: "", action: ""},
]
function insert(){
    var id = document.getElementById("idnew");
    var title = document.getElementById("titlenew");
    var author = document.getElementById("authornew");
    var lender = document.getElementById("lendernew");
    var borrower = document.getElementById("borrowernew");
    let table = document.getElementById("info-table")
    books_data.push(id,title,author,lender,borrower,"");
    var row = table.insertRow(idx-1)
    idx++;
    console.log(id.value);
    var new_id = row.insertCell(0)        
    var new_name = row.insertCell(1)        
    var new_user = row.insertCell(2)        
    var new_lender = row.insertCell(3)        
    var new_borrower = row.insertCell(4)
    var new_action = row.insertCell(5)
    new_id.innerHTML = id.value
    new_name.innerHTML = title.value
    new_user.innerHTML = author.value
    new_lender.innerHTML = lender.value
    new_borrower.innerHTML = borrower.value
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
    }
    if(1){
        document.getElementById("info-table").insertRow(idx++).innerHTML = '<tr><td><input type="text" id="idnew" placeholder="id" required></input></td><td><input type="text" id="titlenew" placeholder="title" required></input></td><td><input type="text" id="authornew" placeholder="author" required></input></td><td><input type="text" id="lendernew"></input></td><td><input type="text" id="borrowernew"></input></td><td><button type="button" onclick="insert()">Add</button></td></tr>'
    }
}