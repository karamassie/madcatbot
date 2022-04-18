



const { WebClient } = require('@slack/web-api');

// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;

// Initialize
const web = new WebClient("xoxb-2210535565-3293068251396-vCrI3a8QqLQgZnwOYnzuKd3X");


(async () => {
  // Start your app
  await app.start();

  
// ID of the channel you want to send the message to
const channelId = "C039E59328Y";

try {
  // Call the chat.postMessage method using the WebClient
  const result = await client.chat.postMessage({
    channel: channelId,
    text: "ssssssssst"
  });

  console.log(result);
}
catch (error) {
  console.error(error);
}
  
  console.log('⚡️ Bolt app is running!');
})();



