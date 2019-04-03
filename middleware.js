var express = require('express')
var app = express()

function m1(req,res,next){
    if(req.query.m==1){
        res.send("Hi from m1")
    }else{
        next()
    }
}
function m2(req,res,next){
    if(req.query.m==2){
        res.send("Hi from m2")
    }else{
        next()
    }
}
function m3(req,res,next){
    if(req.query.m==3){
        res.send("Hi from m3")
    }else{
        next()
    }
}

app.get("/",m1)
app.get("/",m2)
app.get("/",m3)

//Default reuqest query
app.get('/', function (req, res) {
  res.send('Hello from the other side')
})

app.listen(9898)