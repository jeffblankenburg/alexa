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

## Built-In Intents

There is a large list of intents that Amazon has created for you.  You can see several of them in the code sample above.  When you use one of the built-in intents, you still have to write handler functions to be used when the user indicates that they want to use one of these intents, or they won't work.  I recommend making sure that you include all of the relevant intents in every skill, as your users will be trained to expect them.  [You can also read the Amazon documentation for Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents#available-built-in-intents).

| Intent              | Common User Utterances              | Purpose                                                                                       |
|---------------------|-------------------------------------|-----------------------------------------------------------------------------------------------|
| AMAZON.CancelIntent | "cancel," "never mind," "forget it" | Let the user cancel a transaction or task (but remain in the skill), or let the user completely exit the skill |

