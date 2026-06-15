function truncateMessage(text, limit = 100) {
  if (!text) return '';
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
}

function censorText(text, badWords = ['spam', 'abuse', 'hack']) {
  if (!text) return '';
  let censored = text;
  badWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    censored = censored.replace(regex, '***');
  });
  return censored;
}

module.exports = { truncateMessage, censorText };