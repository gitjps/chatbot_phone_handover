# Handover from chatbot to phone call

A chatbot using the Watson Assistant services which continues the dialog via phone should the client prefer to talk to a sales agent.

## Problem statement
While chatbots are widely used by companies to get information from clients, sometimes users stop the conversation for various reason (duration of the dialog, unclear question). In those cases a handover to a human/sales agent helps continue the dialog.

## Architecture
The *Watson Assistant service* is the basis of the chatbot: the Skill controls the dialog, the Assistant is used as an interface to Messenger.
The solution leverages *Node-RED* as a prototyping platform, controlling the application and the Web frontend.

![Architecture](architecture1.jpg)

The Watson Assistant service can do programmatic calls to integrate with backend systems using *IBM Cloud Functions*. So I created a small [gateway](https://github.com/gitjps/watsonassistant-nodered-gateway) to call Node-RED from the Watson Assistant service.

*Twilio* is a developer platform for communications to  add capabilities like voice, video, and messaging to applications. I used the standard [clicktocall Node.js repo](https://github.com/TwilioDevEd/clicktocall-node) and integrated it into the solution.

## Use Case Description
Initially the client chats via Messenger with the Watson Assistant chatbot. 

If she initiates a handover to a sales agent:
- Twilio calls the phones of the client and the phone of a sales agent subequently,
- the two start to talk,
- the status of the preceding chatbot conversation can be displayed on the Node-RED dashboard to the agent (not implemented yet).

## Installation Instructions
The following steps provide an overall overview what needs to be done. Some understanding of app development and [IBM Cloud](https://cloud.ibm.com/registration) are required to follow along.

### Twilio
- Get a [Twilio account](https://www.twilio.com/voice)
- Install the [Click To Call with Node.js and Express](https://www.twilio.com/docs/voice/tutorials/click-to-call-node-express) app on your local machine
- Perform a test calling two known numbers, e.g. your landline and cell number
- Create a Node.js/Express app on IBM Cloud
- Create the manifest file and push the local app to the IBM Cloud
- Perform the test again


### IBM Cloud Functions
- [Create an IBM Cloud Functions Node.js action](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-getting-started&locale=de) using [gateway.js](https://github.com/gitjps/chatbot_phone_handover/blob/master/gateway.js)

### Node-RED on IBM Cloud
- [Create a Node-RED instance](https://cloud.ibm.com/catalog/starters/node-red-starter) and import [node-red.json](https://cloud.ibm.com/catalog/starters/node-red-starter)


### Watson Assistant
- Create a [Watson Assistant Service](https://cloud.ibm.com/catalog/services/watson-assistant), see also the [Getting Started Guide](https://cloud.ibm.com/docs/services/assistant?topic=assistant-getting-started)
- [Create a  new skill](https://cloud.ibm.com/docs/services/assistant?topic=assistant-skill-dialog-add&locale=en) by importing JSON skill file [https://github.com/gitjps/chatbot_phone_handover/blob/master/skill-claim.json](skill-claim.json)
- **Test** Use the *Try Out* button
- [Create an assistant](https://cloud.ibm.com/docs/services/assistant?topic=assistant-assistant-add&locale=en) for web browser and Messenger


