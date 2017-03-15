# Shurl
A Node.js URL Shortener
- [Install](#install)
- [Usage](#debug-usage)
- [Endpoints](#endpoints)
- [Routes](#routes)
- [How to Use](#how-to-use)
- [Database Setup](#database-setup)
- [Style Guide](#style-guide)
- [Unit Tests](#unit-tests)

## Install
To install this application you need to download or clone the repository and install the required packages.

```
express: ^4.14.0
body-parser: ^1.15.2
sequelizejs: ^3.24.3
mysql: ^2.11.1
dotenv: ^4.0.0,
```

You can install the above packages by using the npm install command:

```
$ npm install 'package' --save
```

You will also need to install the Dev dependencies.

```
eslint: ^3.15.0
eslint-config-airbnb: 14.1.0
eslint-plugin-import: ^2.2.0
eslint-plugin-jsx-a11y: ^4.0.0
eslint-plugin-react: ^6.9.0
mocha: ^3.2.0
chai: ^3.5.0
```

You can install the above packages by using the npm install command:

```
$ npm install 'package' --save-dev
```

## Debug Usage

To install the debugging tool you will need to install it as a package.

```
npm install shurl-debug --save
```

The ```.env``` file is located in ```node_modules/shurl-debug/```

To turn off the debugging tool can simply edit the ```.env``` file and change  ```DEBUG = true``` to ```DEBUG = false```:

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
The API currently utilizes the following endpoints:
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

We are using ```require('dotenv').config();``` which allows us to hide the database configuration. To get this to work you'll need to create a file named ```.env``` in the main folder and type in your database information.

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

## Style Guide

Shurl uses the AirBnB Style Guide. You can find the AirBnB Style Guide [here](https://github.com/airbnb/javascript). To ensure that your code adhere's with AirBnB you'll need an IDE that supports the ESLint plugin. [Atom](https://atom.io) is the recommended IDE.

To install the AirBnB Style Guide you'll need to install the dependencies below:

```
eslint: ^3.15.0
eslint-config-airbnb: 14.1.0
eslint-plugin-import: ^2.2.0
eslint-plugin-jsx-a11y: ^4.0.0
eslint-plugin-react: ^6.9.0
```

You will also need to include a file named '.eslintrc.json' with the following code:

```
{
	"env": {
		"node": true
	},
	"extends": "airbnb",
	"plugins": [
        "react"
    ],
	"rules": {
		"new-cap": 0,
		"prefer-template": 0,
		"global-require": 0
	},
	"globals": {
		"describe": true,
		"it": true
	}
}
```

## Unit Tests

To run a unit test make sure you have ```mocha: ^3.2.0``` installed.

You can run a unit test by typing 'mocha' in the command line after changing your directory to the url-shortener.
