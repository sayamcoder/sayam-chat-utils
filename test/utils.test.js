const test = require('node:test');
const assert = require('node:assert');
const { formatChatTime, censorText, generateMessageId } = require('../src/index');

test('formatChatTime formats time correctly', () => {
  const timeStr = formatChatTime(new Date('2026-06-15T10:30:00'));
  assert.match(timeStr, /10:30/);
});

test('censorText filters blacklisted words', () => {
  const clean = censorText('This is a spam message');
  assert.strictEqual(clean, 'This is a *** message');
});

test('generateMessageId generates correct prefix ID', () => {
  const id = generateMessageId('chat');
  assert.ok(id.startsWith('chat_'));
});