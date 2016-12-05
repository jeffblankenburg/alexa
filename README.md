![](https://github.com/jeffblankenburg/alexa/blob/master/images/alexalogo.png)

# Alexa Developer Resources

This is meant to provide an extensive set of links, code, and resources for both new and experienced Alexa developers.

## Important Links You Should Know About

* [Alexa Developer Portal](http://developer.amazon.com) - this is where you create your skills.
* [AWS Developer Console](http://aws.amazon.com) - this is where you create the logic for your skills, as a Lambda function.
* [Alexa @ GitHub](http://github.com/alexa) - a great pile of sample code and tutorials to help you get a skill up and running.
* [EchoSim](http://echosim.io) - a virtual Alexa device in your browser.  A great way to test your skills with voice without a device.
* [Alexa Developer Blog](https://developer.amazon.com/public/community/blog/tag/Alexa) - our blog about news related to Alexa development.

## Alexa Code Samples

We have created a bunch of sample code for you to easily understand the basics of an Alexa skill.  These are all part of this repository, so cloning/downloading this will get you a local copy of everything.

* [Responding To A User With Speech & Cards](https://github.com/jeffblankenburg/alexa/blob/master/responses/README.md)
* Managing State
* Using DynamoDB to Manage Persistence
* Making an HTTP/HTTPS Request
* Building a Biography Skill

## Full Sample Skills

In addition to the code samples above, we also have all of the code for several skills completely written.  You can take them, make them your own, and publish your own skill in under an hour!

| Title               | Language | Description |
|---------------------|----------|-------------|
| [Fact Skill](https://github.com/alexa/skill-sample-nodejs-fact)| node.js | This is our "Hello World" example.  If you haven't written a skill before, this is where you should start. |
| [Autobiography Skill](https://github.com/jeffblankenburg/alexa/tree/master/samples/biography) | node.js | A skill to create an autobiography about yourself.  Users can ask for facts about you, your background, and your resume. |
| [How To](https://github.com/alexa/skill-sample-nodejs-howto) | node.js ||
| [Trivia Skill](https://github.com/alexa/skill-sample-nodejs-trivia) | node.js ||
| [Calendar Reader](https://github.com/alexa/skill-sample-nodejs-calendar-reader) | node.js ||
| [Decision Tree](https://github.com/alexa/skill-sample-nodejs-decision-tree) | node.js ||
| [High Low Game](https://github.com/alexa/skill-sample-nodejs-highlowgame) | node.js ||
| [Audio Player](https://github.com/alexa/skill-sample-nodejs-audio-player) | node.js ||
| [RSS Feed Reader](https://github.com/alexa/skill-sample-nodejs-feed) | node.js ||

<!-- * [Fact Skill (node.js)] - This is our "Hello World" example.  If you haven't written a skill before, this is where you should start.
* [Autobiography Skill (node.js)](https://github.com/jeffblankenburg/alexa/tree/master/samples/biography) - A skill to create an autobiography about yourself.  Users can ask for facts about you, your background, and your resume.
* [How To Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-howto)
* [Trivia Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-trivia)
* [Calendar Reader Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-calendar-reader)
* [Decision Tree Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-decision-tree)
* [High Low Game Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-highlowgame)
* [Audio Player Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-audio-player)
* [RSS Feed Skill (node.js)](https://github.com/alexa/skill-sample-nodejs-feed) -->


## Voice User Interface (VUI)

This section provides information about creating great voice user interfaces, with a focus on creating meaningful intents, effective sample utterances, and how to use slots in creative and useful ways to interact with your users.

* [Intents](https://github.com/jeffblankenburg/alexa/tree/master/intents)
* Utterances
* Slots

## Testing Your Skill

How to use the testing tools that are provided, and other effective testing strategies for your Alexa skills.

## Submission and Certification

How to avoid the common certification mistakes, and resources to make your skill resonate with users.

* Testing with the Service Simulator
* Testing your Lambda skill
* Combining the two
* Using Echosim.io
* Using a device
* Promoting your skill using http://amazon.com/skills


## Measuring Your Skill Usage

* Storing data in DynamoDB
* View the provided metrics
* Using an external tool like Opearlo.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jeff Blankenburg** - *Initial work* - [Jeff Blankenburg](https://github.com/jeffblankenburg)

See also the list of [contributors](https://github.com/jeffblankenburg/alexa/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
