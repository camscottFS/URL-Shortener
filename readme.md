# Shurl 
A Node.js URL Shortener
- [Install] (#install)
- [Endpoints] (#endpoints)
- [Routes] (#routes)
- [How to Use] (#how-to-use)
- [Database Setup] (#database-setup)

## Install
To install this application you need to download or clone the repository and install the required packages.

```
express: ^4.14.0
body-parser: ^1.15.2
sequelizejs: ^3.24.3
mysql: ^2.11.1
```

You can install the above packages by using the npm install command:

```
$ npm install express --save
$ npm install body-parser --save
$ npm install sequelize -- save
$ npm install mysql --save
```

## Endpoints
The API currently utiltizes the following endpoints:
* GET - /api/v1/urls - displays all URLs
* GET - /api/v1/urls/:id - displays URL by ID
* POST - /api/v1/urls - creates a shortened URL
* POST - /api/v1/urls/:id - updated a shortened URL by ID
* DELETE  - /api/v1/urls/:id - deletes URL by ID

## Routes

* /go/:shortURL - redirects to the actual url


## How to Use
To create a shortened URL you need to make a POST request to /api/v1/urls/shorten and send a JSON request with the URL you'd like to shorten.

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

## Database Setup

To setup Node.js to connect to a database you'll need to use Sequelize. For this project, we are using MySQL.

Create a JS file called 'db.sql' and save it in your models folder.

Next, create the code that will allow the database connection.

```
const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

const url = sequelize.define('url', {
  short_url: {
    type: Sequelize.STRING,
  },
  long_url: {
    type: Sequelize.STRING,
  }
});

url.hasMany(url, {
  foreignKey: 'id',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;
```

We are using ```require('dotenv').config();``` which allows us to hide the database configuration. To get this to work you'll need to create a file named '.env' in the main folder and type in your database information.

```
DB_NAME=DATABASE NAME
DB_USER=DATABASE USER
DB_PASS=DATABASE PASSWORD
DB_HOST=DATABASE HOST
DB_SCHEMA=DATABASE SCHEMA
DB_PORT=DATABASE PORT
```

Lastly, you'll need to require the file we just created in app.js

```
const db = require('../models/db');
```