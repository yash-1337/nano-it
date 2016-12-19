# Nano-It
##A Mean Stack URL Shortener

This is a Mean Stack URL Shortener that can easily be hosted on Heroku, as it includes a Procfile.txt

This URL shortener uses Node, Express, MongoDB, and Angular 1.5.8

For the database, this uses a Mlab sandbox database. The database has one collection, and the JSON code is something like this:
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
Nano-It takes a long url, gives it an id and stores it in an object inside the database. Then it makes a new link from its id and connects the new link to the old one. Everytime someone clicks on that new link, the browser redirects to the long link.
