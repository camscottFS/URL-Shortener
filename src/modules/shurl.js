/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 2: Dynamic API
*/

const crypto = require('crypto');
const url = require('../models/url');
const log = require('../modules/debugger');

module.exports = (url, res) => {
  log.msg("URL being shortened:");
  // set the shortened url prefix
  let prefix = 'shurl.io/';
  // get the url data
  let hashUrl = url.body.url;
  // create the hash
  const hash = crypto.createHmac('sha256', hashUrl).digest('hex');
  // shorten the hash length to 7
  hashUrl = hash.substr(0,7);
  log.msg("Created short url:" + hashUrl);
  // create the shortened url
  let shortened = prefix + hashUrl;
  // create data to send
  let data = {
      "url": url.body.url,
      "tynyUrl": shortened,
      "shortUrl": hashUrl,
      "key": url.body.key
  }
  log.debug({
    "type" : "success",
    "msg" : "Created a short url",
    "location" : "shurl.js on line 12",
    "data" : {data}
  });
  // return the data
  return(data);
}
