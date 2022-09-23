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
app.message('a cat', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`I AM THAT <@${message.user}>!`);
});

app.message('@ cat', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`I AM @THAT <@${message.user}>!`);
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

// Listens to incoming messages that contain "kitty kitty kitty
app.message('WHY?', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say('I AM WHY');
});

//const welcomeChannelId = 'C039E59328Y';

const welcomeChannelIds=('C039E59328Y', 'C04207S1PQX');

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


//const channel = 'C039E59328Y';


app.message(async ({ message, say }) => {
  if (message.user == "U01D6FYHLUW" && message.channel == "C039E59328Y") {

    await say(`niaaaw? <@${message.user}>`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U013B6CPV62" && message.channel == "C039E59328Y") {

    await say(`pffffft <@${message.user}>!`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U02KYLBLKR9" && message.channel == "C039E59328Y") {

    await say(`_bats 8-ball <@${message.user}>_`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U015VNG4KU4" && message.channel == "C039E59328Y") {

    await say(`WHY <@${message.user}>!`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U01ACA3M90C" && message.channel == "C039E59328Y") {

    await say(`CHEESE!`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U042HD447LL" && message.channel == "C04207S1PQX") {

    await say(`psssss!`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U032A2PMSE9" && message.channel == "C04207S1PQX") {

    await say(`WOOF ???`); }
});

const randomCatActions = ["_is sleep-nodding, but never sleeping_", "_grumps_", "_sighs_", "_eyes a pair of trousers it wants to poke holes in_", "_perches on a windowsill_", "_leaves a cat-hair donut-stain on a fancy cushion_", "_follows @ella around, but at a safe distance_", "_begs to go outside_", "_is deeply suspicious of other channels_", "_lives in a constant state of ennui_", "_jumps at a shadow that moved_", "_narrows its eyes at @caleb_", "_overeats_" , "_leaves pockmarks in zach's favorite chair_", "_flops on its side in exasperation_","_longs for @celeste_", "_scratched o  the  .  key_", "_is suspiciously cute_", "_eyes @ishan's cheese_","_flexes its claws while yawning_", "_stays clear of rolling office chairs_"]

//const randomCatActions = ["_pretends not to like celeste_","_sheds_","_supermans on the cool tiles_","_clogs the laptop fan with ha*0+ir#LQ#@)FKDAs_","_longs to go out_","_stares at a pixie in the corner_","_judges_","_blurs after a dustbunny_", "_rubs against @ella's bike_","_STOMPS_","_stares woefully at its empty dish_","_was last seen hanging by its claws from a curtain_","_stares at @hugo while they're sleeping_","_scowls at The World_","_lies on important papers_","_snores far too loudly for a cat its size_","_trails litter everywhere_","_parkours over Caleb's laptop_","_sheds_","_is hiding under the sofa_","_is sleeping on Jacob's jacket_"]

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
