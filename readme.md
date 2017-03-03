# Shurl 
A Node.js URL Shortener
- [Install] (#install)
- [Endpoints] (#endpoints)
- [How to Use] (#how-to-use)

## Install
To install this application you need to download or clone the repository and install the required packages.

```
express: ^4.14.0
body-parser: ^1.15.2
```

You can install the above packages by using the npm install command:

```
$ npm install express --save
$ npm install body-parser --save
```

## Endpoints
The API currently utiltizes the following endpoints:
* GET - /api/v1/urls - retrieves the last created shortened URL
* POST - /api/v1/urls - creates a shortened URL

## How to Use
To create a shortened URL you need to make a POST request to /api/v1/urls and send a JSON request with the URL you'd like to shorten.

```
{
	"url":"https://google.com"
}
```
The API will then create a shortened url. An example of the output is shown below.
```
{
	"shortUrl":"shurl.io/8a25389"
}