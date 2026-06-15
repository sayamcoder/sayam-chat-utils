const { formatChatTime, formatRelativeTime } = require('./dateUtils');
const { truncateMessage, censorText } = require('./textUtils');
const { generateMessageId } = require('./idUtils');

module.exports = {
  formatChatTime,
  formatRelativeTime,
  truncateMessage,
  censorText,
  generateMessageId
};