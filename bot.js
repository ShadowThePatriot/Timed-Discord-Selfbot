const Discord = require("discord.js-selfbot");
const sleep = require('system-sleep');
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Connected!"); 
});
client.login('INSERT-DISCORD-CLIENT-TOKEN-HERE'); //Add your discord token here

//Function that adds a random delay in addition to the already specified minimum delay. Change below
function randonum(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

client.on("ready", function sendit() {
  while(true){
    var randnum = randonum(150000, 600000); //Default values for additional delay in ms (2.5 minutes, 10 minutes)
    const channel01 = client.channels.cache.find(channel => channel.id === "123456789012345678"); //Enter the channel id to send the message to here
    channel01.send("test") //Message to send here
    console.log("Message Sent!");
    sleep(3600000); //Specify a minimum delay here (in ms)
    sleep(randnum);
  }
});
