require('dotenv').config();
// Import the Slack WebClient from @slack/web-api
const { WebClient } = require('@slack/web-api');

// Slack bot token (replace with actual token or use environment variable for security)
const token = process.env.SLACK_BOT_TOKEN;

// Initialize Slack WebClient
const web = new WebClient(token);

// The channel to use (replace with sandbox channel if needed)
const channel = 'C093LN7630W';

(async () => {
  try {
    // 1. Send a test message to #general
    const sendResult = await web.chat.postMessage({
      channel,
      text: 'This is a test message from the Slack API sandbox script.'
    });
    console.log('Message sent:', sendResult.ts);

    // 2. Schedule a message for 1 hour later
    const postAt = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now (in seconds)
    const scheduleResult = await web.chat.scheduleMessage({
      channel,
      text: 'This is a scheduled message for 1 hour later.',
      post_at: postAt
    });
    console.log('Scheduled message:', scheduleResult.scheduled_message_id);

    // 3. Retrieve the sent message by timestamp
    const history = await web.conversations.history({
      channel,
      latest: sendResult.ts,
      inclusive: true,
      limit: 1
    });
    const message = history.messages && history.messages[0];
    if (!message) {
      throw new Error('Message not found');
    }
    console.log('Retrieved message:', message.text);

    // 4. Edit the message content
    const updateResult = await web.chat.update({
      channel,
      ts: sendResult.ts,
      text: 'This message has been edited by the Slack API sandbox script.'
    });
    console.log('Message updated:', updateResult.text);

    // 5. Delete the message
    const deleteResult = await web.chat.delete({
      channel,
      ts: sendResult.ts
    });
    console.log('Message deleted:', deleteResult.ok);
  } catch (error) {
    // Error handling for all Slack API operations
    console.error('Slack API error:', error.data || error.message || error);
  }
})();
