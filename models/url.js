const db = require('./db');

exports.create = (payload, err, success) => {
    db.url.create(payload).then(sucess).catch(err);
}
