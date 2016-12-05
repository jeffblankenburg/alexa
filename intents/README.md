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