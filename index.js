console.log("wassup")
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});
//
// let sanityCheck = async () => {
//   await app.client.chat.postMessage({
//     channel: 'C039E59328Y',
//     text: "hellooooo sanity"
//   });
// }
// sanityCheck()

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
  await say(`WHAT <@${message.user}>!`);
});

const welcomeChannelId = 'C039E59328Y';


// When a user joins the channel, cat reacts
app.event('member_joined_channel', async ({ event, client, logger }) => {


  //delay entry message by 5seconds
  setTimeout(async function() {

    //randomize what happens when someone joins

    const x = 10 * Math.random()
    if (x >= 0 && x <= 3) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_eyes <@${event.user}> suspiciously_`
      });
    }

    if (x > 3 && x <= 6) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_hears <@${event.user}> enter, and peeks out from behind claw-pocked curtains_`
      });
    }

    if (x > 6 && x <= 10) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `might be a figment of <@${event.user}>'s imagination'_`
      });
    }

  }, 5000);

});

const randomCatActions = ["_sheds_","_gets underfoot_","ninjas behind corners","_YOWLS for snax_","_is generally unamused_","_flicks its tail indignantly_","_yoga-poses to clean itself while keeping one keen eye on everyone in The Litter Box_","_horks up a hairball_","_snores far too loudly for a beast this size_","_stares at a pixie in the corner_","_judges_","_blurs after a dustbunny_"]

setInterval(async () => {
console.log('check if randomness is running');
   const x = Math.floor(randomCatActions.length * Math.random())

  const result = await app.client.chat.postMessage({
    channel: welcomeChannelId,
    text: randomCatActions[x]
  });
}, 2400 * 1000);

(async () => {
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();
