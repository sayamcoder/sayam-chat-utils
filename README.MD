# sayam-chat-utils

An advanced utility package for managing messaging formatting, text moderation, and unique identifiers in Node.js chat applications.

## Installation

    npm install sayam-chat-utils

## Features & Usage

### 1. Date & Time Helpers

    const { formatChatTime, formatRelativeTime } = require('sayam-chat-utils');

    // Standard Chat Time
    console.log(formatChatTime(new Date())); // e.g., "10:30 AM"

    // Relative Post Time
    console.log(formatRelativeTime(new Date(Date.now() - 5 * 60 * 1000))); // "5m ago"

### 2. Text Moderation

    const { censorText, truncateMessage } = require('sayam-chat-utils');

    // Censor Bad Words
    const cleanText = censorText('Stop this spam right now!');
    console.log(cleanText); // "Stop this *** right now!"

    // Truncate Long Text
    console.log(truncateMessage('Hello everyone, welcome to the channel', 10)); // "Hello ever..."

### 3. ID Generation

    const { generateMessageId } = require('sayam-chat-utils');

    const msgId = generateMessageId('chat');
    console.log(msgId); // e.g., "chat_1718428200000_3d4f82ae..."

## Running Tests
To run local unit tests, run:

    npm test

## License
MIT