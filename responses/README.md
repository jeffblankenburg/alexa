# Responding your Users

This is where we discuss how to respond to a user.

## Tell vs. Ask

## Randomization

## Cards

This will import the alexa sdk and set up an alexa object for us to work with. Next, we need to handle when the intents for our skill. Thankfully, the alexa-sdk makes it simple to have a function fire on every Intent we would like. For example, to create a handler for a ‘HelloWorldIntent’ we simply add the following:

var handlers = {

    'HelloWorldIntent': function () {

        this.emit(':tell', 'Hello World!');

                  }

};

Notice the new syntax above for “:tell”? The alexa-sdk follows a tell/ask response methodology for generating your outputSpeech response objects. If we wanted to ask the user for information we would replace the above with:

                this.emit(‘:ask’, ’What would you like to do?’, ’Please say that again?’);

In fact, many of the responses you would generate for your skill follow this same syntax! Here are some additional examples for common skill response generation:

var speechOutput = 'Hello world!';

var repromptSpeech = 'Hello again!';

 

this.emit(':tell', speechOutput);

 

this.emit(':ask', speechOutput, repromptSpeech);

 

var cardTitle = 'Hello World Card';

var cardContent = 'This text will be displayed in the companion app card.';

 

var imageObj = {

    smallImageUrl: 'https://imgs.xkcd.com/comics/standards.png',

    largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'

 

};

 

this.emit(':askWithCard', speechOutput, repromptSpeech, cardTitle, cardContent, imageObj);

 

this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, imageObj);

 

this.emit(':tellWithLinkAccountCard', speechOutput);

 

this.emit(':askWithLinkAccountCard', speechOutput);

 

this.emit(':responseReady'); // Called after the response is built but before it is returned to the Alexa service. Calls :saveState.

 

this.emit(':saveState', false); // Handles saving the contents of this.attributes and the current handler state to DynamoDB and then sends the previously built response to the Alexa service. Override if you wish to use a different persistence provider. The second attribute is optional and can be set to ‘true’ to force saving.

 

this.emit(':saveStateError'); // Called if there is an error while saving state. Override to handle any errors yourself.

