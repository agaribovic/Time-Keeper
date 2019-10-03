const { WebClient } = require('@slack/client');
// set your token to the bot token provided by slack
const token = 'xoxb-544465760851-633934627078-XWSQIlN5uPi40YPci9ATQMST'
if (!token) { 
   console.log('You must specify a token to use this example');
   return; 
}

// Initialize a Web API client
const web = new WebClient(token);
// Call a Web API method (in this case, `team.info`)
// Your token should have `team:read` scope (or `bot` scope, which includes `team:read`)
web.channels.list()
   .then(res => {
     console.log('Channels', res);
})
  .catch((error) => {
   // Error :/
   console.log('Team info error:');
   console.log(error);
});

// This is the channel ID given to from Slack
const conversationId = 'CHA8QH9CL';
                      
// Now let's the WebClient to send to the workspace
web.chat.postMessage({ channel: conversationId, text: 'Molimo unesite preostale sate za ovu sedmicu. Hvala' })
   .then((res) => {
     // `res` contains information about the posted message
     console.log('Message sent: ', res.ts);
 })
   .catch(console.error);