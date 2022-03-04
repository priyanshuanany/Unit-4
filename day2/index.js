const express = require("express");
const app = express();

// console.log(app);

app.get("/home" ,function(req,res){
    console.log("Hello");
});

app.get("/books", function(req,res){
    res.send({
        hindi: ["gita","shjd","shsh"],
        wndj: ["sjhdj","sjjs","eiie"],
        persian:["abc","ghi","jkl"],
        urdu:["asd","rty","ipo"]
    });
});

app.listen(7007,() =>{
    console.log("calling port 7007");
})