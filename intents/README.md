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

| Intent                   | Common User Utterances                             | Purpose                                                                                                                                                                                                                                                                                    |
|--------------------------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AMAZON.CancelIntent      | "cancel," "nevermind," "forget it"                 | Let the user cancel a transaction or task (but remain in the skill), or let the user completely exit the skill. |
| AMAZON.HelpIntent        | "help," "help me," "can you help me"               | Provide help about what the skill does and how to use it. See “Offer Help for Complex Skills” in the [Voice Design Best Practices](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-best-practices) for guidelines about help text. |
| AMAZON.LoopOffIntent     | "loop off"                                         | Let the user request that the skill turn off a loop or repeat mode, usually for audio skills that stream a playlist of tracks. |
| AMAZON.LoopOnIntent      | "loop," "loop on," "keep repeating this song"      | Let the user request that the skill turn on a loop or repeat mode, usually for audio skills that stream a playlist of tracks. |
| AMAZON.NextIntent        | "next," "skip," "skip forward"                     | Let the user navigate to the next item in a list. |
| AMAZON.NoIntent          | "no, "no thanks"                                   | Let the user provide a negative response to a yes/no question for confirmation. |
| AMAZON.PauseIntent       | "pause," "pause that"                              | Let the user pause an action in progress, such as pausing a game or pausing an audio track that is playing. |
| AMAZON.PreviousIntent    | "go back," "skip back," "back up"                  | Let the user go back to a previous item in a list. |
| AMAZON.RepeatIntent      | "repeat," "say that again," "repeat that"          | Let the user request to repeat the last action. |
| AMAZON.ResumeIntent      | "resume," "continue," "keep going"                 | Let the user resume or continue an action. |
| AMAZON.ShuffleOffIntent  | "stop shuffling, "shuffle off," "turn off shuffle" | Let the user request that the skill turn of a shuffle mode, usually for audio skills that stream a playlist of tracks. |
| AMAZON.ShuffleOnIntent   | "shuffle," "shuffle on," "shuffle the music"       | Let the user request that the skill turn on a shuffle mode, usually for audio skills that stream a playlist of tracks. |
| AMAZON.StartOverIntent   | "start over," "restart," "start again"             | Let the user request to restart an action, such as restarting a game, transaction, or audio track. |
| AMAZON.StopIntent        | "stop," "off," "shut up"                           | Let the user stop an action (but remain in the skill), or let the user completely exit the skill. |
| AMAZON.YesIntent         | "yes," "yes please," "sure," "OK"                  | Let the user provide a positive response to a yes/no question for confirmation. |

## About Canceling and Stopping

Separate intents are provided for canceling and stopping for situations in which your skill needs to distinguish between the two concepts. This lets “cancel” have a meaning distinct from “stop.” However, in most skills, the behavior should be the same for both. Since most users stay “stop,” “cancel,” and related phrases to exit skills, we strongly recommend that you map this to exit behavior unless your skill has a good reason not to. Note that this is also a requirement of the skill certification process (see “Stopping and Canceling” in Voice Interface and User Experience Testing for Custom Skills. In this case, you can use the same intent handler for both intents.

### Example of using AMAZON.CancelIntent to exit a skill:
User: Alexa, Open Tide Pooler. 
Tide Pooler: Tide Pooler: Welcome to Tide Pooler. Which city would you like tide information for? 
User: Never mind. (sends an IntentRequest with an AMAZON.CancelIntent)
Alexa: Tide Pooler: Good-bye (response closes the session by setting the shouldEndSession flag to true)
(Skill exits).
Alternative use of AMAZON.CancelIntent to cancel a transaction, but remain within the skill:
…earlier portion of interaction, with the user ordering a pizza.
My Pizza: Confirming order for a large pepperoni and mushroom pizza. Is that correct? 
User: Cancel (sends an IntentRequest with an AMAZON.CancelIntent)
Alexa: Canceling order. Did you want to order something else? (response asks a question and keeps the session open by setting shouldEndSession to false).
User: Order a small Italian sausage pizza. (user’s new request mapped to an appropriate skill-specific intent).
…(interaction continues)
Also note that users can use the wake word to interrupt Alexa while she is speaking a response. This is often used to stop a skill during lengthy text to speech. If the user’s command maps to one of your intents (either a custom intent or one of the built-in intents), your service receives an IntentRequest like normal. For example:
User: Alexa, Ask Tide Pooler for high tides in Monterey. 
Tide Pooler: Tide Pooler: Today in Monterey, the first high tide… (Interrupt Alexa before the skill completes the response) User: Alexa, Stop. (sends an IntentRequest with an AMAZON.StopIntent)
Tide Pooler: Good-bye (response closes the session by setting the shouldEndSession flag to true)
(Skill exits).


