# Handover from chat with bot to a phone call with a sales agent

A chatbot using the Watson Assistant services which continues the dialog via phone should the client prefer to talk to a sales agent.

## Problem statement
While chatbots are widely used by companies to get information from clients, sometimes users stop the conversation for various reason (duration of the dialog, unclear question). In those cases a handover to a human/sales agent helps continue the dialog.

## Architecture
Watson aassistant is the basis of the chatbot. The Skill controls the dialog, the Assistant is used as an interface to Messenger.
The solution leverages Node-RED as a prototyping platform, controlling the application and the Web frontend.

![Architecture](architecture1.jpg)

IBM Cloud Functions serves as a [gateway](https://github.com/gitjps/watsonassistant-nodered-gateway). 

Twilio is a developer platform for communications to  add capabilities like voice, video, and messaging to applications. I used the standard [clicktocall Node.js repo](https://github.com/TwilioDevEd/clicktocall-node) and integrated it into the solution.

## Use Case Description
Initially the client chats via Messenger with a chatbot. 

If she initiates a handover to a sales agent:
- Twilio calls the phones of the client and the phone of a sales agent,
- the two start to talk,
- the status of the preceding conversation can be displayed on the Node-RED dashboard to the agent.

