# Shurl
A Node.js URL Shortener
- [Install] (#install)
- [Usage] (#debug-usage)
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

## Debug Usage

This application has a built-in debug feature.

To completely enable the debugging tool you'll need to add the following to the '.env' file:

```
DEBUG = true
DEBUG_CONSOLE = true
DEBUG_MSG_LOG = true
```

To turn off the debugging tool you can simple turn the 'true' to a 'false':

```
DEBUG = false
DEBUG_CONSOLE = true
DEBUG_MSG_LOG = true
```

To prevent debug messages from appearing in the console you must change ```DEBUG_CONSOLE = true``` to ```DEBUG_CONSOLE = false```.

To disable logging of the .msg() method you must change ```DEBUG_MSG_LOG = true``` to  ```DEBUG_MSG_LOG = false```.

Below is an example of what you can expect the log to generate when the debugging tool is enabled:

```
Event at 15:05:19 @ server.js on line 30
SUCCESS
Server active on port 3000

Event at 15:05:22 @ app.js on line 15 GET:/status
SUCCESS
Server status is healthy!

Event at 15:05:27 @ app.js on line 41 GET:/urls
SUCCESS
Read all URLs

Event at 15:06:52 @ app.js on line 65 GET:/urls/:id
SUCCESS
Read URL by ID
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
```

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
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  url: {
      type: Sequelize.STRING,
  },
  shurl: {
      type: Sequelize.STRING,
  },
  shortUrl: {
      type: Sequelize.STRING,
  },
  key: {
      type: Sequelize.STRING,
  }
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
