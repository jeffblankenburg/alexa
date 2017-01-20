'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    "LaunchRequest": function () {
        this.emit(":tell", "You started this skill successfully!");
    },

};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.AppId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
