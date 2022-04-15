
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});

// Listens to incoming messages that contain "kitty kitty kitty
app.message('kitty kitty kitty', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`WHAT <@${message.user}>!`);
});
// Listens to incoming messages that contain "pss pss pss

app.message('pss pss pss', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`WHAT <@${message.user}>!`);
});
// Listens to incoming messages that contain "chicken
app.message('chicken', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`mrow? `);
});
// Listens to incoming messages that contain "chicken
app.message('fish', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`GIMME <@${message.user}>!`);
});
// Listens to incoming messages that contain "chicken
app.message('cat', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`mrrrrr `);
});

const welcomeChannelId = 'C039E59328Y';


// When a user joins the channel, cat reacts
app.event('member_joined_channel', async ({ event, client, logger }) => {


  //delay entry message by 5seconds
  setTimeout(async function() {

    //randomize what happens when someone joins

    const x = 10 * Math.random()
    if (x >= 0 && x <= 5) {

      // Call chat.postMessage with the built-in client
      const result = await client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_eyes <@${event.user}> suspiciously_`
      });
    }

    if (x > 5 && x <= 10) {

      // Call chat.postMessage with the built-in client
      const result = await client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_thinks it is doing a great job of appearing to ignore <@${event.user}> _`
      });
    }

  }, 5000);

});



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



