
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


const welcomeChannelId = 'C039E59328Y';


// When a user joins the channel, cat reacts
app.event('member_joined_channel', async ({ event, client, logger }) => {


  //delay entry message by 5seconds
  setTimeout(function() {
    logger.info("cake")
  }, 5000);



  // function stateChange(newState) {
  //     setTimeout(function () {
  //         if (newState == -1) {
  //             alert('VIDEO HAS STOPPED');
  //         }
  //     }, 5000);
  // }
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
      text: `_is doing a great job of looking like it is ignoring <@${event.user}> _`
    });
  }



});





(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();



