Installation
=======

You will need to install the following packages:

```
body-parser: ^1.16.0,
chai: ^3.5.0,
express: ^4.14.1,
mysql: ^2.13.0,
sequelize: ^3.30.1,
dotenv: ^4.0.0,
supertest: ^3.0.0
```

1. Copy and paste the files to your directory.
2. Go to localhost:(port)/api/v1/urls/(enter url here)
3. Success

Debugger NPM Package
=======
1. npm install url-debug


End Points
=======
POST /api/v1/urls
Create a shortened URL

GET /api/v1/urls
Display all URLS

GET /api/v1/urls/:id
Display URL based upon id

POST /api/v1/urls/:id
Update URL based upon id

DELETE  /api/v1/urls/:id
Delete url based upon id


Expectations
=======

{"long_url":"connect.fullsail.edu","short_url":"http://bit.ly/2k1JgY8"}
