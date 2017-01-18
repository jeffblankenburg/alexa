#Security Guidelines

[Official Alexa Skills Kit Security Testing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-security-testing)

To protect customer data, the cloud-based service for your skill must meet Amazon’s security requirements. The specific requirements depend on whether you are hosting using [AWS Lambda](http://aws.amazon.com/lambda/) or your own endpoint. AWS Lambda is a service offering by [Amazon Web Services](http://aws.amazon.com/).

1. ###Skills Hosted As Lambda Functions
   Your Lambda function must ensure that requests are intended for your service, as discussed in the “Verifying that the Request is Intended for Your Service” section of [Handling Requests Sent by Alexa](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/handling-requests-sent-by-alexa).

2. ###Skills Hosted as Web Services on Your Own Endpoint
    * The web service must present a valid, trusted certificate when the connection is established and must possess the corresponding private key. Amazon only trusts certificates that have been signed by an [Amazon-approved certificate authority](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/included/).
    * Self-signed certificates cannot be used for published skills.
    * The service must verify that incoming requests were sent by the Alexa service. You can do this by validating the request signature as discussed in the “Verifying that the Request was Sent by Alexa” section of [Hosting a Custom Skill as a Web Service](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-web-service).
    Note: the Java library provided with the Alexa Skills Kit provides a disableRequestSignature flag in the SpeechletServlet class that you can use for testing. If you used this while testing, be sure to set it back to false when you are ready to submit for certification.
    * The service must ensure that incoming requests are intended for your service, as discussed in the “Verifying that the Request is Intended for Your Service” section of [Handling Requests Sent by Alexa](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/handling-requests-sent-by-alexa).

3. ###Skills with Account Linking
   If your skill needs to connect the identity of the end user with a user in another system (account linking), please verify that your skill follows all the instructions defined in [Linking an Alexa User with a User in Your System](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/linking-an-alexa-user-with-a-user-in-your-system). When submitting your skill, be sure to provide a valid set of account credentials with your testing instructions so our certification team can verify the account linking and functionality of your skill. Your skill must also pass the following account linking criteria:

   * The skill must use Amazon’s account linking feature by redirecting the user to a login page or landing page when enabling the skill with the Alexa app.
   * The skill’s privacy policy and terms of use links displayed in the Alexa app must each open to a valid web page.
   * If you are the owner of the credential system, your skill must pass the following criteria:
      * You must own the domain presenting the login page.
      * The login page must be served over HTTPS.
   * If you are not the owner of the credential system, your skill must pass the following criteria:
      * You must own the landing page that users are directed to when enabling your skill. This landing page must clearly communicate which third-party (3P) accounts are needed to link the account to the skill.
      * The landing page must direct the user to the domain login page owned by the OAuth providers and must be served over HTTPS.
      * You may not directly handle, store, or transmit credentials on behalf of the user.
   * If you are using [Login with Amazon](https://developer.amazon.com/login-with-amazon), your skill must pass the following criteria:
      * The login page URL must be from amazon.com.
      * The login page must clearly communicate which third-party (3P) accounts are needed to link the account to the skill.
      * The page must display your skill’s icon or logo on the left and the Amazon logo on the right.
      * You must clearly state the customer information your skill is collecting and using. This can be directly on the login page or in your privacy policy.

4. ###Skills that Allow Unlocking or Disarming
   If your skill lets the user unlock or disarm a device, you must require the user to speak a PIN of at least four digits before executing the unlock / disarm action. Customers cannot opt out of the PIN requirements, although you can provide reduced functionality for customers who don’t want to enable a PIN. The PIN is recommended, but not required for locking or arming a device.

   ---
   ####Test
      Enable the skill and complete the account linking process. Ensure that the account linking flow includes setting a PIN to access unlock functionality and the PIN meets the security requirements.
   ---
   ####Expected Results
   ---
   * The skill requires the user to set a PIN as part of the account linking process.
   * The PIN must be at least four digits long.
   * The flow reminds the user to reset the PIN every 60 days.

   ---
   ####Test
   ---
   If the skill offers reduced functionality when no PIN is set, disable the skill or log in to the Alexa app as an Alexa user who has not yet enabled the skill. Enable the skill, but do not set the PIN when prompted. Attempt to invoke the intents that let the user unlock or disarm a device.
   ####Expected Results
   ---
   * The requests to unlock or disarm are not executed. The user is instructed to set a PIN to use these features.
   * Features other than unlock/disarm do work normally without the PIN.

   ####Test
   ---
   Invoke each intent that lets a user unlock or disarm a device.
   ####Expected Results
   ---
   Each request to unlock or disarm a device asks the user to speak the PIN.

   ####Test
   ---
   Invoke each intent that lets a user unlock or disarm a device. When prompted for the PIN, speak an incorrect PIN. Provide an incorrect PIN at least three times.
   ####Expected Results
   ---
   * The skill rejects the incorrect PIN and does not complete the unlock or disarm request.
   * After three consecutive incorrect PIN attempts, the skill instructs you to reset your PIN. Attempting a fourth request with the original, correct PIN now fails.

5. ###Skills for Booking Reservations
   If your skill lets users book reservations, the skill must:
   * Note this feature in the description.
   * Use account linking to connect the user with your system.
   * Require the user to confirm the booking before it is completed. This can be using a phrase such as “Yes,” “OK,” or other similar responses.
   * Provide a confirmation that the skill completed the booking via voice, skill card, and email.

   ####Test
   ---
   Review the description for the skill.
   ####Expected Results
   ---
   The skill’s description mentions the ability to book reservations or services.

   ####Test
   ---
   Verify that your skill follows all the instructions defined in [Linking an Alexa User with a User in Your System](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/linking-an-alexa-user-with-a-user-in-your-system).
   ####Expected Results
   ---
   The skill is set up to use account linking, and passes the tests described in section 3 above: Skills with Account Linking.

   ####Test
   ---
   Start an interaction with the skill and attempt to create a reservation.
   ####Expected Results
   ---
   * The skill asks you for confirmation before completing the booking.
   * Stating a phrase like “Yes,” “OK,” or “sure” confirms the booking.

   ####Test
   ---
   Start an interaction with the skill and attempt to create a reservation. When prompted to confirm, use one of the acceptance phrases such as “Yes.”
   ####Expected Results
   ---
   * The skill completes the booking
   * You receive confirmation via voice
   * A card is sent to the Alexa app confirming the booking.
   * You receive an email confirming the booking.






