//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

server.get("/services", (req,res)=>{
    //DB find
    var services=[
        {icon:"fa-shopping-cart",heading:"E-Commerce",test:"Lorem ipsum dolor sit amet,consectetur adipisicing elit."},
        {icon:"fa-laptop",heading:"Responsive Design",test:"Lorem ipsum dolor sit amet,consectetur adipisicing elit."}
    ];
    res.send(services);  
})

server.get("/profolio", (req,res)=>{
    //DB

    res.send("Profolio");  
})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})