const config = {
	"twilio": {
		"accountSid": `${process.env.ACCOUNT_SID}`,
		"authToken": `${process.env.AUTH_TOKEN}`,
		"phoneNumber": "+19282603589",
		"allowedNumbers": [
			"+17193146820"
		],
		"webhookUrl": "https://kp-chatbot.herokuapp.com/texteverything/message",
		"webhook_path": "/texteverything/message"
	},

	"express": {
		"port": "1337"
	}
}

module.exports = config
