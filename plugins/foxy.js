const rq = require('request-promise')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const twilio = require('twilio')

var methods = {
        run: function(request, response) {
          rq('https://randomfox.ca/floof/').then(function(htmlString){
            var json = "";
            try {
              json = JSON.parse(htmlString);
              image = json.image;
            } catch (ex) {
                console.log('Failed to parse the JSON data.')
            }
            const twiml = new MessagingResponse();
            const message = twiml.message();
            message.media(`${image}`);
            response.end(twiml.toString());
          }).catch((err) => {
            console.log("this also sucks")
          })
        },

    meta: {
        aliases: ['foxy', 'fox']
    }
}

module.exports = methods
