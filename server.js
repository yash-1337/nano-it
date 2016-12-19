var express = require('express'),
    app = express();

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://yash1337:yash1337@ds139288.mlab.com:39288/url-shortener";


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(url, function (err, database) {

    var db = database.collection("url");


    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/client/views/index.html');
    });
    app.get('/:file.html', function (req, res) {
        res.sendFile(__dirname + '/client/views/' + req.param("file") + '.html');
    });

    app.use('/js', express.static(__dirname + '/client/js'));
    app.use('/css', express.static(__dirname + '/client/views/css'));

    app.get('/:link', function (req, res) {
        var link = req.params.link;
        var id = link.slice(2);
        db.distinct("urls").then(function (data) {
            for(i=0;i<data.length;i++){
                if(data[i].id === Number(id)){
                    res.redirect(data[i].url);
                    break;
                }
            }
        });
    });

    app.post('/urlinput', function (req, res) {
        input = req.body;
        db.distinct("urls").then(function (data) {
            
            input.id = data.length + 1;
            var linkExists = false;

            for(i=0;i<data.length;i++){
                if(data[i].url === input.url){
                    linkExists = true;
                    res.send("/uY" + data[i].id)
                    break;
                }

            }

            if(!linkExists){
                db.update({ _id1: 1 },{ $addToSet: { urls: input } });
                res.send("/uY" + input.id);
            }
        });      
        
    });

    app.post('/listLinks', function (req, res) {
        db.distinct("urls").then(function (data) {
            res.send(data);
        });
    });

    app.listen(process.env.PORT || 3000, function () {
        console.log('\nListening... on localhost:3000');
    });
});