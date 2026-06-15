const crypto = require('crypto');

function generateMessageId(prefix = 'msg') {
  const rand = crypto.randomBytes(8).toString('hex');
  return `${prefix}_${Date.now()}_${rand}`;
}

module.exports = { generateMessageId };