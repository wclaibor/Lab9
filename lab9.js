var express = require('express');
var app = express();
app.use('/', express.static('./html')).
    use('/images', express.static( '../images')).
    use('/lib', express.static( '../lib'));
app.listen(1337);
