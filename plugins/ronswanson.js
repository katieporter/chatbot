const rq = require('request-promise')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const twilio = require('twilio')

var methods = {
    run: function(request, response) {
        rq('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(htmlString) {
            var json = ""
            try {
                json = JSON.parse(htmlString);
                quote = json;
            } catch (ex) {
                console.log('Failed to parse the JSON data.')
            }
            const twiml = new MessagingResponse()
            twiml.message(`${quote}`)
            response.end(twiml.toString())
        }).catch((err) => {
            console.log('HTTP request failed!')
        })
    },

    meta: {
        aliases: ['ronswanson', 'ron']
    }
}

module.exports = methods
