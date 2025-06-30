# Slack Sandbox Project

## What is this?

This is a simple test project to play around with Slack's API. Think of it like a playground where you can try out different things with Slack messages.

## What does it do?

This script does 5 basic things:
1. **Sends a message** to a Slack channel
2. **Schedules a message** to be sent 1 hour later
3. **Gets back the message** you just sent
4. **Edits the message** to change what it says
5. **Deletes the message** completely

## How to use it?

### Step 1: Get your Slack token
- Go to your Slack workspace
- Create a new app or use an existing one
- Get the bot token (it looks like `xoxb-1234567890-abcdef...`)
- Put this token in a file called `.env` like this:
  ```
  SLACK_BOT_TOKEN=xoxb-your-token-here
  ```

### Step 2: Install the needed stuff
Open your terminal/command prompt and run:
```bash
npm install @slack/web-api dotenv
```

### Step 3: Change the channel
In the `slack_sandbox.js` file, find this line:
```javascript
const channel = 'C093LN7630W';
```
Replace `C093LN7630W` with your own channel ID. To get your channel ID:
- Right-click on your channel name in Slack
- Select "Copy link"
- The channel ID is the part after the last `/` in the URL

### Step 4: Run the script
In your terminal, run:
```bash
node slack_sandbox.js
```

## What will happen?

When you run the script, it will:
1. Send a test message to your channel
2. Schedule another message for 1 hour later
3. Show you the message it just sent
4. Edit that message to say something different
5. Delete the message completely

You'll see messages in your terminal showing what's happening.

## Troubleshooting

**If you get an error about the token:**
- Make sure your `.env` file exists and has the right token
- Check that your bot is added to the channel you're trying to use

**If you get an error about the channel:**
- Make sure you're using the right channel ID
- Make sure your bot is in that channel

**If nothing happens:**
- Check that your bot has permission to send messages
- Make sure your bot is online and active

## Files in this project

- `slack_sandbox.js` - The main script that does everything
- `.env` - Where you put your secret token (you need to create this)
- `README.md` - This file you're reading right now

## Need help?

If something doesn't work, check:
1. Your internet connection
2. Your Slack token is correct
3. Your bot has the right permissions
4. You're using the right channel ID

That's it! This is just a simple way to test Slack's API and see how it works. 