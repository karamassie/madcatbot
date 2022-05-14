console.log("wassup")
const { App } = require('@slack/bolt');
const { APP } = require('dotenv').config()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});

// let sanityCheck = async () => {
//   await app.client.chat.postMessage({
//     channel: 'C039E59328Y',
//     text: "hellooooo (in)sanity"
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
  await say(`I AM THAT <@${message.user}>!`);
});

// Listens to incoming messages that contain "meow
app.message('meow', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`_peers out from under the channel to look suspiciously at <@${message.user}>_`);
});

// Listens to incoming messages that contain "kitty kitty kitty
app.message('beckons', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say('_faces the other direction_');
});

// Listens to incoming messages that contain "kitty kitty kitty
app.message('dog', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say('_zooms away_');
});

// Listens to incoming messages that contain "kitty kitty kitty
app.message('woof', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say('_skirts away_');
});

// Listens to incoming messages that contain "kitty kitty kitty
app.message('calls', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`_turns away from <@${message.user}>_`);
});

// Listens to incoming messages that contain "kitty kitty kitty
app.message('pet', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`HSSSSS <@${message.user}>!`);
});
// Listens to incoming messages that contain "kitty kitty kitty
app.message('bug', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`BUG?! _leaps, snatches, snaps, cronches, swallows_`);
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

    if (x > 3 && x <= 7) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_hears <@${event.user}> enter, and peeks out from behind claw-pocked curtains_`
      });
    }

    if (x > 7 && x <= 10) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: welcomeChannelId,
        text: `_might be a figment of <@${event.user}>'s imagination_`
      });
    }

  }, 5000);

});


// console.log('list members of channel')
//
// const members = app.client.conversations.members



const randomCatActions = ["_sheds_","_chitters at birds_","_gets underfoot_","_ninjas behind corners_","_silently releases gas from the depths of hell_","_hides from the VACK OOM_","_barges the bathroom door open_","_streeeeeeetches_","_YOWLS for snax_","_is generally unamused_","_flicks its tail indignantly_","_yoga-poses to clean itself while keeping one keen eye on everyone in The Litter Box_","_attacks a hairtie it found under the sofa_","_bleps_","_horks up a hairball_","_snores far too loudly for a beast this size_","_clogs laptop fans with hairs_","_stares at a pixie in the corner_","_judges_","_blurs after a dustbunny_", "_cautiously approaches Ella_","_STOMPS_","_stares woefully at its empty dish_","_parkours over Caleb's laptop_"]

setInterval(async () => {
console.log('check if randomness is running');
   const x = Math.floor(randomCatActions.length * Math.random())

  const result = await app.client.chat.postMessage({
    channel: welcomeChannelId,
    text: randomCatActions[x]
  });
}, 2000 * 1000);

(async () => {
  await app.start();
  console.log('⚡️ this app is running!');
})();
