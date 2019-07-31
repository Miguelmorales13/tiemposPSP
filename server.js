var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, "./dist/tiempos")));
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, './dist/tiempos/index.html'))
})
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);