var express = require('express')
var app = express()

//Default reuqest query
app.get('/', function (req, res) {
  res.send('Hello World')
})

//custom reqeuest query with parameters
app.get('/hi', function (req, res) {
    //logging data from request query
    console.log(req.query)
    if(req.query.name){
        //trying to access request query parameter with name
        res.send('Hello '+ req.query.name)
    }else{
        res.send('Hello guest!!')
    }
})
app.get('/bye', function (req, res) {
    res.send('Goodbye')
  }) 
//exposing public directory to user requests with the name of 'pages'
app.use('/pages',
        express.static(__dirname+'/public')
    )
    
app.listen(8888)