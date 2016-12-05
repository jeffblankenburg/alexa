# Alexa Intents

## What is the purpose of an intent?

Think about a DVD player for a moment.  A DVD player has a very specific interface.

* Play
* Pause
* Stop
* Fast-forward
* Rewind
* Eject

As you think about building a voice user interface for a DVD player, this is a pretty complete list of the things your user can do.  There aren't *more* things that a DVD player does, so regardless of what our user says to the device, we know that they're going to be indicating that they have one of those intents.

Each of these intents must have some code to accomplish that task.  This code is found in our logic, which can be created as an AWS Lambda function, or your own HTTPS endpoint.

## Intent Syntax

Below is a sample of an intent schema.  You will see that some of the intents have defined slots, while others have not.  The information you need to execute a specific intent will determine when/if you will need a slot value.

```JSON
{
    "intents":  [
        { "intent": "AMAZON.HelpIntent", "slots": [] },
        { "intent": "AMAZON.StopIntent", "slots": [] },
        { "intent": "AMAZON.RepeatIntent", "slots": [] },
        { "intent": "AMAZON.CancelIntent", "slots": [] },
        { "intent": "AMAZON.YesIntent", "slots": [] },
        { "intent": "AMAZON.NoIntent", "slots": [] },
        { "intent": "searchIntent", "slots": [{ "name": "date", "type": "AMAZON.DATE" }] },
        { "intent": "eventIntent", "slots": [{ "name": "number", "type": "AMAZON.NUMBER" }]}
    ]
}
```