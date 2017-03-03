/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 1: Static API
*/

const crypto = require('crypto');

module.exports = (url, res) => {
  let prefix = 'shurl.io/';
  let hashUrl = url.body.url;
  let hash = crypto.createHmac('sha256', urlHash).digest('hex');
  hashUrl = hash.substr(0,7);
  let shortened = prefix + hashUrl;
  let data = {
    "url": url.body.url,
    "tynyUrl": shortUrl
  }
  res.json({shortUrl: shortUrl});
}
