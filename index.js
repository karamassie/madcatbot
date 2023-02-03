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




// Listens to incoming messages that contain "kitty kitty kitty
app.message('kitty kitty kitty', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`WHAT <@${message.user}>!`);
});

app.message('pss pss pss', async ({ message, say }) => {
  await say(`WHAT <@${message.user}>!`);
});

app.message('chicken', async ({ message, say }) => {
  await say(`CHICKEN!`);
});

app.message('fish', async ({ message, say }) => {
  await say(`GIMME <@${message.user}>!`);
});

app.message('a cat', async ({ message, say }) => {
  await say(`I AM THAT <@${message.user}>!`);
});

app.message('@ cat', async ({ message, say }) => {
  await say(`I AM @THAT <@${message.user}>!`);
});

app.message('meow', async ({ message, say }) => {
  await say(`_peers out from under the channel to look suspiciously at <@${message.user}>_`);
});

app.message('looks', async ({ message, say }) => {
  await say('_faces the other direction_');
});

app.message('dog', async ({ message, say }) => {
  await say('_zooms away_');
});

app.message('woof', async ({ message, say }) => {
  await say('_skirts away_');
});


app.message('calls', async ({ message, say }) => {
  await say(`_turns away from <@${message.user}>_`);
});


app.message('pet', async ({ message, say }) => {
  await say(`HSSSSS <@${message.user}>!`);
});

app.message('bug', async ({ message, say }) => {
  await say(`_leaps, snatches, snaps, cronches, swallows_`);
});

app.message('WHY', async ({ message, say }) => {
  await say('I AM WHY');
});

//const welcomeChannelId = 'C039E59328Y';



const theLitterBox = 'C039E59328Y'
const botsmapforHorses = 'C043S9B1Z4Z'

const randomChannel = () => {
  const n = Math.random()
  if (n > 0.0001) {
    return theLitterBox
  } else {
    return botsmapforHorses
  }
}

// When a user joins the channel, cat reacts
app.event('member_joined_channel', async ({ event, client, logger }) => {


  //delay entry message by 5seconds
  setTimeout(async function() {

    //randomize what happens when someone joins

    const x = 10 * Math.random()
    if (x >= 0 && x <= 3) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: theLitterBox,
        text: `_eyes <@${event.user}> with interest_`
      });
    }

    if (x > 3 && x <= 7) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: theLitterBox,
        text: `_hears <@${event.user}> enter, and peeks out from behind claw-pocked curtains_`
      });
    }

    if (x > 7 && x <= 10) {

      // Call chat.postMessage with the built-in client
      const result = await app.client.chat.postMessage({
        channel: theLitterbox,
        text: `_pads over to greet <@${event.user}>_`
      });
    }

  }, 5000);

});


//const channel = 'C039E59328Y';
//responds to any messages from a given user

app.message(async ({ message, say }) => {
  if (message.user == "U01D6FYHLUW" && message.channel == theLitterBox) {

    await say(`niaaaw? <@${message.user}>`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U013B6CPV62" && message.channel == theLitterBox) {

    await say(`pffffft <@${message.user}>!`); }
});

/*app.message(async ({ message, say }) => {
  if (message.user == "U032A2PMSE9" && message.channel == theLitterBox) {

  await say(randomMessageL)}
});

function randomMessageL() {
  const n = Math.random();
  if (n > 0.5) {
    return('blazers!');
  } else {
    return('lazers!');
  }
}
*/
app.message(async ({ message, say }) => {
  if (message.user == "U02KYLBLKR9" && message.channel == theLitterBox) {

    await say(`_bats 8-ball <@${message.user}>_`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U015VNG4KU4" && message.channel == theLitterBox) {

    await say(`WHY <@${message.user}>!`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U01ACA3M90C" && message.channel == theLitterBox) {

    await say(`CHEESE!`); }
});

app.message(async ({ message, say }) => {
  if (message.user == "U019PF0KNE6" && message.channel == theLitterBox) {

    await say(`HUH!`); }
});
/*
app.message(async ({ message, say }) => {
  if (message.user == "U032A2PMSE9" && message.channel == theLitterBox) {

    randomMessageKara();
  }});

  function randomMessageKara() {
    const n = Math.random();
    if (n > 0.5) {
      say('sssssssst');
    } else {
      say('prrrrrr');
    }
  }
  */
//random actions at set intervals in channel

const randomCatActions = ["_bats at the CNC machine_", "_sniffs @ian's shoes_", "_knocks over the waterbowl_", "_farts, then stares at the dog blamefully_", "_grumps_", "_sighs_", "_eyes a pair of trousers it wants to poke holes in_", "_perches on a windowsill_", "_leaves a cat-hair donut-stain on a fancy cushion_", "_follows @ella around, but at a safe distance_", "_begs to go outside_", "_is deeply suspicious of other channels_", "_lives in a constant state of ennui_", "_jumps at a shadow that moved_", "_narrows its eyes at @caleb_", "_overeats_" , "_leaves pockmarks in zach's favorite chair_", "_flops on its side in exasperation_","_gets under @belle's feet_","_is guided by 5: the claws on its front paw and the number of meals it believes to need each day_","_leggos @sampoder's eggos_", "_scratched o  the  .  key_", "_is suspiciously cute_", "_eyes @ishan's cheese_","_flexes its claws while yawning_", "_stays clear of rolling office chairs_"]

//const randomCatActions = ["_pretends not to like celeste_","_sheds_","_supermans on the cool tiles_","_clogs the laptop fan with ha*0+ir#LQ#@)FKDAs_","_longs to go out_","_stares at a pixie in the corner_","_judges_","_blurs after a dustbunny_", "_rubs against @ella's bike_","_STOMPS_","_stares woefully at its empty dish_","_was last seen hanging by its claws from a curtain_","_stares at @hugo while they're sleeping_","_scowls at The World_","_lies on important papers_","_snores far too loudly for a cat its size_","_trails litter everywhere_","_parkours over Caleb's laptop_","_sheds_","_is hiding under the sofa_","_is sleeping on Jacob's jacket_"]

setInterval(async () => {
console.log('check if randomness is running');
   const x = Math.floor(randomCatActions.length * Math.random())

  const result = await app.client.chat.postMessage({
    channel: randomChannel(),
    text: randomCatActions[x]
  });
}, 1000 * 4000);

(async () => {
  await app.start();
  console.log('⚡️ this app is running!');
})();
