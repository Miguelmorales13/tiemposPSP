var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, "./dist")));
app.get(/.*/, (req, res) => {
    res.sendfile(path.join(__dirname, './dist/index.html'))
})
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);