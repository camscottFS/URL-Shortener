/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment: 10 Automated Version Bumping
*/
const db = require('./db');

exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
}

// find all urls
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
}

// find url by id
exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    // find all relations
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}

// update by id
exports.update = (payload, err, success) => {
  db.url.update({
    where: {
      id: payload.id,
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

// delete by id
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
    // find all relations
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}
