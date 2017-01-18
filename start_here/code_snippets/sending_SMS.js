'use strict';
var Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');

const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });
const PHONE_NUMBER = '12345678901'; // change it to your phone number

var sessionHandlers = {
    "LaunchRequest": function() {
        const params = {
            PhoneNumber: PHONE_NUMBER,
            Message: "This is an SMS message sent from an Alexa skill!",
        };
        // result will go to function callback
        SNS.publish(params, function(err, data) {
            if (err) {
                console.log(err.stack);
                return;
            }
            else {
                console.log("SMS Message Sent");
            }
        });
        this.emit(":tell", "You have successfully sent an SMS message with Alexa!  Congratulations!");
    }
}

exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = undefined;
    alexa.registerHandlers(sessionHandlers);
    alexa.execute();
};
