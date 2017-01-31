#Common Certification Pitfalls
When you submit a skill to Alexa skill store, it must meet [Amazon's Certification Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-submission-checklist) for it to be available to customers. 65% of all skill submissions fail certification because of a handful of simple requirements. This article is meant to illustrate examples of common failures, so that you can streamline your certification process.

##Incorrect Example phrases (Frequency of Failures: Very High)
As part of your submission, you are required to provide three example phrases.  These phrases are shown to a user when they enable your skill in the store, so that they have some context for how to communicate with your skill.  These are found on the "Publishing Information" section of your [Developer Console](https://developer.amazon.com/edw/home.html#/skills/list) for your skill.

![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-skit/blog/common_pitfalls/example_phrases._TTH_.png)


Certification requirements for the first example phrase are different from the second and third. As you read this, it is important to understand whether the following requirements apply to only the first or all example phrases.

There are generally four scenarios that can lead to certification failure with example phrases.

1.  **Example phrases are missing specific criteria**

    For the first example phrase, you need to provide the user with an example to start your skill.  Something like "Alexa, ask Seattle Guide about the Space Needle," is an example of a good first example phrase.

    The second and third phrases can be a little more flexible, depending on how you structured your skill.  If your skill asks the user for a response (keeps the stream open), your second and third example phrases can be responses to those questions. (For these cases, you don't need the wake word or the invocation name in your example.)
    
    In most cases, however, we recommend providing a user with three distinct ways to interact with your skill from the beginning, using both a wake word and an invocation name.  This way, you can highlight some of the key features of your skill to your new users, and give them some interesting things to try as soon as they enable your skill.

    A successful example phrase will use the following format:</br>
    **[Wake Word], [Launch Word] [Invocation Name] [Connector*] [Utterance]**

    * **Wake Word** - this will generally be the word Alexa, but some users have changed their wake word to Amazon, Echo, or Computer.  Use "Alexa" in these examples.
    * **Launch Word** - this includes words like "open," "ask," "start," "launch," "begin," "talk to," "resume," "run," or "load."
    * **Invocation Name** - this is the name you assigned to your skill.
    * **Connector** - these are simple words to connect a user's launch word to their utterance, like "and," "to," or "for."  This is optional, but makes a user's statement sound more like natural language.
    * **Utterance** - this should be one of the sample utterances you provided in your Interaction Model for your skill.  It *must* match one of your sample utterances.

    For more information on creating strong example phrases, please read [Understanding How Users Invoke Custom Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation).

    Here are some examples of phrases that consistently fail certification:
    *  "Alexa, start over" - You cannot use a wake word without your invocation name. In addition, "start over" (or "don’t know") can be a response from the user when the stream is open, in which case, wake word and invocation name do not make sense.
    *  "Alexa, ask GetNewFactIntent give me a fact" - GetNewFactIntent is not the invocation name for the skill, it is likely the name of the intent you created.
    *  "Alexa, Social Headline" - You must use a launch word before your invocation name.

2.  **Example phrases do not contain one of your skill’s Sample Utterances**

    Each example phrase should be explicitly modeled on the sample utterances. For instance, if you have this example phrase:
        "Alexa, ask Tide Pooler when is high tide in Seattle."

    Then you must also have this utterance:  
        <Intent Name> when is high tide in {City}

    Any slots in the example phrase (such as Seattle in this example) must be filled with an example of a valid slot value. In this example, City is a custom slot type, and “Seattle” is a value explicitly defined for the City type.  It is important to review your sample utterances and pick example phrases from these sample utterances only.
    
3.  **Example phrases do not provide a response in context**
    Example phrases are shown on the skill’s detail card in the Alexa app to help users understand how to interact with your skill. These are the phrases users are most likely to try the first time they interact with the skill. Therefore, you want to be certain that they work well and provide a good user experience.

    Consider the following example,
    > User: "Alexa, ask home cooking how to make pancakes"

    > Skill: "Welcome to Home Cooking. You can ask a question like, what's the recipe for pancakes. ... Now, what can I help you with?"
    
    The example phrase fails because it does not elicit a relevant response from the skill.

##Unacceptable Invocation Names (Frequency of Failures: High)
An invocation name is required only for a custom skill, and it is how a user indicates they want to interact with your skill. Complete instructions on choosing an appropriate invocation name are available at [Choosing the Invocation Name for a Custom Skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill).

Typically a skill may fail due to one or more of following concerns with its invocation name:

1.  Invocation name is a single word, without it being unique to developer’s brand/intellectual property.  You must use at least two words in your invocation name unless you own the rights to a specific word, like Uber, Dominos, or Nest.
2.  Invocation name consists of 2 words, one of which is a definite article.  In English, "the" is a definite article.  You can't use the word "the" in a 2 word invocation name.
3.  Invocation name consists of wake words (Alexa, Amazon, Echo, or Computer) or connectors (to, from, by, if, and, whether) or launch words (launch, ask, tell, load or begin).
4.  Invocation name infringes upon intellectual property rights of an entity or a person.  For example, you can't use the name "AWS Helper" because it infringes on AWS's intellectual property.

An exhaustive list of [Invocation Name Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill#invocation-name-requirements) are documented on the developer portal. 

##IP Infringement (Frequency of Failure: High)
A skill fails for IP infringement when it:

1.  Implies sponsorship or endorsement by Amazon or otherwise mischaracterizes the relationship with Amazon.
2.  Infringes the intellectual property rights (including copyright, trademark and publicity rights) of a third party.
3.  Purports to be affiliated with a company or brand but is not the official skill of that company or brand.

IP infringement may occur in metadata including but not limited to, skill name, invocation names, and description or even in responses from the skill.

There are two important things you must take care of for your skill to not fail:

1.  You must provide documentation demonstrating that you have the right to use the trademark via the [Contact Us form in the Amazon Developer Console](https://developer.amazon.com/public/support/contact/contact-us).
2. In case you want to create a skill that is based on a movie/celebrity or any other brand, we recommend:
    1.  Add your developer name or one of the following words to the skill name or invocation name (whichever contains the third party trademark): "unofficial", "fan", "unauthorized"; and/or
    2.  Revise your skill description to clarify that the skill is not sponsored or endorsed by the brand you are mentioning.

##Incorrect Session Management (Frequency of Failure: Medium)
Every response sent from your skill to the Alexa service includes a flag indicating whether the conversation with the user (the session) should end or continue. If the text-to-speech provided by your skill and the session flag do not synchronize, it will be failed for incorrect session management.

There are 3 scenarios in which a skill will fail:

1.  Response from the skill asks the user a question (or prompts the user for a reply) must leave the session open for a user response.
2.  If your skill does not request a response from the user, the session should close.  Keeping the session open without prompting the user to interact will result in failure.
3.  If user input is required after launching the skill with no intent, a welcome prompt must be provided describing what users can ask for, and the session must remain open for a user response. If the session closes after launching the skill, a core functionality must be completed without prompting users to speak.  An example of a welcome message can be found in our [City Guide template](https://github.com/alexa/skill-sample-nodejs-city-guide), and an example of offering core functionality (with no prompt) can be found in our [Fact Skill template](https://github.com/alexa/skill-sample-nodejs-fact).

##Incorrect Implementation of the Help Intent (Frequency of Failure: Medium)
When users ask for “help” within the skill, it must return a prompt which instructs users how to navigate the skill’s core functionality. Additionally, the help prompt must end with a question for users and leave the session open to receive a response. Consider the following example:
> User: "Alexa, open silicon roundabout" 

> Skill: "Welcome to Women Of Silicon Roundabout."

>User: "help" 

>Skill: "Welcome to Women Of Silicon Roundabout."

The skill does not provide a descriptive help prompt that provides valuable instructions to user to navigate the skill. Here’s another example where help intent is incorrectly implemented. The skill takes help as a slot value:

>User: alexa open airport info 

>Alexa: For delay information, tell me an Airport code. 

>User: help 

>Alexa: I didn't have data for an airport code of help

In this case, the user is indicating that they need help with your skill, but you are receiving the value "help" as a slot value.  This can lead to a frustrating experience for your users, and will result in a failed certification.
