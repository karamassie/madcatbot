
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
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_eyes <@${event.user}> suspiciously_`
      });
    }

    if (x > 5 && x <= 10) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_thinks it is doing a great job of appearing to ignore <@${event.user}> _`
      });
    }

  }, 5000);

});

const randomCatActions = ["_sheds_","_horks up a hairball_","_snores far too loudly for a beast this size_","_stares at a ghost in the corner_","zips after a dustbunny in a blur"]

setInterval(async () => {
  
   const x = Math.floor(randomCatActions.length * Math.random())
    
  const result = await app.client.chat.postMessage({
    channel: welcomeChannelId,
    text: randomCatActions[x]
  });
}, 1200 * 1000) 