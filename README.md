# Nano-It
##A Mean Stack URL Shortener

This is a Mean Stack URL Shortener that can easily be hosted on Heroku, as it includes a Procfile.txt

This URL shortener uses Node, Express, MongoDB, and Angular 1.6.0

Nano-It takes a long url, gives it an id and stores it in an object inside the database. Then it makes a new link from its id and connects the new link to the old one. Everytime someone clicks on that new link, the browser redirects to the long link.

## Make your own Nano-It!

Since this is meant to be hosted on Heroku, it includes a ready-to-go Procfile. To make the url shortener work with your own heroku app, you will have to clone this repository, and push it to your own repo. After that you will have to connect your repo to Heroku from the Heroku Dashboard. After you have connected your Heroku app to you repository, you will have to create a new Config Var. Name the config var MONGO_URI (case matters) and its value should be the specific URI that connects to your Mlab database (Ex. mongodb://user:password@1234.mlab.com:1234/database).Save you config var and go to [mlab.com](http://mlab.com). Create an account, and then create a new free sandbox database. You can find many tutorials online on how to do this. Create a new collection called "url", and edit the JSON so that it looks like this:
```json
{
    "_id1": 1,
    "urls": [
        {
            "url": "http://www.google.com",
            "id": 1,
            "date": "12/18/16"
        }
    ]
}
```
Go back to the Heroku Dashboard, and deploy your app. **Profit!**
