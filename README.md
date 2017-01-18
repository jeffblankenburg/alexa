<img src="https://github.com/jeffblankenburg/alexa/blob/master/start_here/images/alexalogo.png" height="100">

#What Is This Repository?
This is a place for me to keep all of the resources I find important to Alexa development in one place.  There's code snippets, links to tools and information across the web, and even information for the rest of my Alexa evangelism team.  All of this information is my own, and does not represent Amazon in any way.


#Getting Started With Alexa Skills
There are a few things you need to do before you get started:

1.  Set up an account on the [Amazon Developer Portal](http://developer.amazon.com).
2.  Set up an account for [Amazon Web Services](http://aws.amazon.com).
3.  [Get a device!](http://amzn.to/2iQkYlF)  There are other ways to test, but having the real thing makes a world of difference in your testing.
4.  Build one of the sample skills.
    1. [Fact Skill](https://github.com/alexa/skill-sample-nodejs-fact) - This is the simplest of examples, but a great one to start with.  Add some new facts to the sample, and you're done!
    2. [Calendar Reader](https://github.com/alexa/skill-sample-nodejs-calendar-reader) - This sample imports the calendar data from an .ICS file you specify to let you know about events on that calendar.
    3. [City Guide](https://github.com/alexa/skill-sample-nodejs-city-guide) - Populate this sample with information about your favorite city so that others can learn about it!
    4. [Decision Tree](https://github.com/alexa/skill-sample-nodejs-decision-tree) - Want to create a skill to figure out if you're a Monica or a Chandler?  Use this sample.

#Other Stuff To Check Out Here
1.  Code Snippets
2.  Building Voice User Interfaces
3.  Testing Your Alexa Skills
4.  Getting Your Skill Through certification
5.  Measuring Your Skills With Analytics
6.  Alexa Evangelists

#Other Stuff For Alexa
1.  [Alexa on Twitter](http://twitter.com/alexadevs) - a place to find news, announcements, and information about developing for Alexa.
2.  [Forums](https://forums.developer.amazon.com/spaces/23/index.html) - there is an active community of developers working together to solve development problems in our forums.
3.  [Feature Requests](https://forums.developer.amazon.com/spaces/185/index.html) - if there are features you want to see available for building Alexa skills, this is the place to mention and vote on them.
4.  [Alexa Office Hours](https://attendee.gotowebinar.com/rt/8389200425172113931) - Our team runs office hours weekly, where you can come learn more about Alexa development, as well as ask specific questions to our moderators.














<!--
| [Getting Started](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide) | [Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/alexa-skills-developer-training) | [Lambda Functions](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function) | [Voice Design](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-best-practices) | [Testing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill) | [Blog](https://developer.amazon.com/public/community/blog/tag/Alexa) | [Forums](https://forums.developer.amazon.com/spaces/23/Alexa+Skills+Kit.html) |
|---------|-------------|----------------|------------------------|-----------|-----------------|-------------|

This GitHub repository is meant to provide an extensive set of links, code, and resources for both new and experienced Alexa developers.

#What is an Alexa skill?

Skills to Alexa are like apps on your phone.  There's a [marketplace](http://amazon.com/skills), you can add them to your account, and they make your great device even better.  Skills make it easier to [order a pizza](https://www.amazon.com/Dominos-Pizza-LLC/dp/B01B5G99CC/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1480978760&sr=1-1&keywords=dominos), play a [game of Jeopardy](https://www.amazon.com/Sony-Pictures-Television-Jeopardy-J6/dp/B019G0M2WS/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1480978784&sr=1-1&keywords=jeopardy), or even [find out how much gas is left in your tank](https://www.amazon.com/Automatic/dp/B017OJL1IE/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1480978809&sr=1-1&keywords=automatic).

#How do I build a skill?

Skills are made up of two parts, just like most software you use today.  There's the server-side logic: the code that makes your skill take action, and there's the user interface, which is made entirely of your user's voice commands.  These two pieces together comprise a skill for Alexa.  To get started building your first skill, we recommend trying our [Fact Skill Tutorial](https://github.com/alexa/skill-sample-nodejs-fact).  It will walk you through each step of the process, explaining each of the important pieces of skill construction along the way.

#Where can I ask questions?

There are plenty of places to connect with the Alexa team to get your questions answered.  Here's a few places you can start:

* [Office Hours](https://attendee.gotowebinar.com/rt/8389200425172113931) - Our team runs office hours weekly, where you can come learn more about Alexa development, as well as ask specific questions to our moderators.
* 
* [Feature Requests](https://forums.developer.amazon.com/spaces/185/index.html) - if there are features missing from Alexa, or any of the supporting technology, this is the place to ask for it.  Vote up the features you need, and see what others are asking for.
* [Twitter](http://twitter.com/alexadevs)
* [Alexa Evangelists](https://github.com/jeffblankenburg/alexa/tree/master/evangelists) - several people on our team are dedicated to helping to grow and educate software developers about Alexa development.


Once you've published your first skill, we highly recommend checking out the sections highlighted at the top of this page.  There's much more to learn about [Voice User Interfaces](https://github.com/jeffblankenburg/alexa/tree/master/voice_user_interface), [testing your skills](https://github.com/jeffblankenburg/alexa/tree/master/testing), [certification](https://github.com/jeffblankenburg/alexa/tree/master/certification), and even [measuring how and when your skill is getting used](https://github.com/jeffblankenburg/alexa/tree/master/analytics)!

## Important Links You Should Know About

* [Alexa Developer Portal](http://developer.amazon.com) - this is where you create the user interfaces for your skills.
* [AWS Developer Console](http://aws.amazon.com) - this is where you create the logic for your skills, as a Lambda function.
* [Alexa @ GitHub](http://github.com/alexa) - a great pile of sample code and tutorials to help you get a skill up and running.
* [EchoSim](http://echosim.io) - a virtual Alexa device in your browser.  A great way to test your skills with voice without a device.
* [Alexa Developer Blog](https://developer.amazon.com/public/community/blog/tag/Alexa) - our blog for news related to Alexa development.

## Authors

* **Jeff Blankenburg** - *Initial work* - [Jeff Blankenburg](https://github.com/jeffblankenburg)

See also the list of [contributors](https://github.com/jeffblankenburg/alexa/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

-->
