# City'Zen Bots hackathon (Dec 9-11, 2016 Paris)

To learn more about the hackaton, check the [event page](http://cityzenbotshackathon.bemyapp.com/)

In a nutshell, you have 48 hours to build your awesome hack, and win the big prize.
Note that:
- a team is composed of 2 to 6 persons, 
- best use of Cisco Technologies is an important criteria among others (Execution/UI/UX, Innovation, Business Potential, Team/pitch), [hackathon rules](https://docs.google.com/document/d/1XAuNx0UaJKlNqss2CX9MvtZkZnw1QqG6i3wIm31-3gc/edit). 

New to Cisco, no problem, we're here to help.
You'll find below the list of mentors and resources for each technology we provide.

Event Twitter tags: 
- #cityzenbots, #devnethackathon 
- @CiscoDevNet, @BeMyAppFR
- @CiscoSparkDev, @CiscoSpark
- @Tropo
- @Meraki
- @pndaproject


## How to get support ?

On-site support is provided by our team of mentors, see below.

You can also get support via the Cisco Spark Support Room.
To join the room, simply text your email at +33-7-56-7801-50 or 07-56-78-01-50.
Check the [Tropo script](survey-and-bridge.js) if you're looking for inspiration. 

If you're new to Cisco Spark, you'll receive an invitation email.
Check your spam folder, if the invitaiton does not reach your mailbox after a few minutes.

By default Cisco Spark opens in a Web browser.
Note that you'll get an even better experience by [installing Cisco Spark on your laptop or Mobile](https://www.ciscospark.com/downloads.html).


## Mentors

Mentors for all technologies below are present during the week-end to support you.
Reach to them on-site, or simply mention them in the CityZen Bots sypport room by typing their alias.

- Cisco Spark: @rcronier, @omainada, @dhedoire, @stsfartz, @jonfiel, @ryweddle
- Cisco Spark (Java SDK): @jmedved, @johnburn
- IoX:
- IoT:
- Meraki: 
- PaNDA: @fbachet, @jegarnie
- Tropo: @rcronier, @omainada, @dhedoire, @stsfartz, @jonfiel, @ryweddle

- Recast.ai: 
- Spinalcom: 


# Technologies

## Cisco Spark

If you are new to Cisco Spark development, [make sure to check these technical resources](https://github.com/ObjectIsAdvantag/hackathon-resources#cisco-spark-cloud-collaboration-apis) to quickly onboard.


### How to create a bot

**If you are a developer**, you can take a nodejs lab: 
[build locally or build with cloud9](https://github.com/CiscoDevNet/codemotion-milan-2016#from-zero-to-enterprise-chatbots-with-cisco-spark-apis).
If you opt for take the Cloud9 lab, ask to be added to the Cloud9 DevNet team to avoid entering your credit card infos.

_Note that for this event, we provide support for a NLP and bot quickstart in nodejs supported by [Rescast.ai team](https://github.com/RecastAI/starter-bot-ciscoSpark)._ 

If you prefer others languages, check the [awesome-ciscospark](https://github.com/CiscoDevNet/awesome-ciscospark) resources for sdks and examples in your language.

_Note that for this event, we also provide on-site support for an [advanced Java SDK](https://github.com/CiscoDevNet/odl-sparkbot)._


**If you're not a developer**, we get you covered as well. 

Leverage a [3rd party integration service](https://github.com/CiscoDevNet/awesome-ciscospark#integration-services) to build your bot without coding:
- Zapier: we provide a learning lab on DevNet
- Built.io and Stamplay are good options if Zapier happened to be too limited for your hack


### How to host your bots

Your bot requires to be publically accessible to receive events from Cisco Spark.

If you're using a Cloud IDE such as Cloud 9 or an Integration Service, your bot is already reachable on the internet.
No further action needed. Simply add your bot endpoint as a Cisco Spark webhook. Check the labs above for guidance.

If you're coding on your local machine, you will want to choose an option below
- create a tunnel to the internet with ngrok or localtunel: this is suitable during your development phase, check this tutorial with [ngrok](https://github.com/CiscoDevNet/codemotion-milan-2016/blob/master/labs/SPARK-2-Run-a-Cisco-Spark-Bot-locally.pdf).
- deploy on a Cloud platform of your choice: you may opt for Heroku free dynos service, or CleverCloud free trial. Check this tutorial to [deploy on Heroku](https://github.com/CiscoDevNet/codemotion-milan-2016/blob/master/labs/SPARK-5-Deploy-a-Cisco-Spark-Integration.pdf) (the guidance is for Cisco Spark integration but the deployment phase is the same for bots).


## Meraki

If you are new to Meraki APIs, check the [Meraki Web site for developers](http://developers.meraki.com/).
Make sure to register on the portal if you want to pretend to a Meraki gear as you used the technology in your hack.

Meraki provides APIs connected with its cloud-based network architecture. 
The CMX / location API is featured for this hackathon.
The CMX API provides the locations of Wifi and BLE devices it sees on the network.
By registering an endpoint, you will receive a JSON payload every minute, and for each Access Point.  

The payload structure is [described here](http://developers.meraki.com/tagged/Location/chrono).

#### Sample Applications
* Node-Red Node: https://www.npmjs.com/package/node-red-contrib-meraki-cmx
* Python CMX Receiver: https://github.com/dexterlabora/cmxreceiver-python
* NodeJS CMX Receiver: https://github.com/dexterlabora/cmxreceiver
* Ruby w/ Google Map: https://github.com/meraki/cmx-api-app
* AWS Lambda & Kibana: https://github.com/dexterlabora/cmxreceiver-lambda-inline

#### Learning Lab
* Internet of LEGO: http://www.internetoflego.com/category/projects/meraki/

### BLE Beacons

Meraki APs can advertise BLE beacons, also known as iBeacons, that enable clients to identify their location. Each AP will broadcase a UUID, Major and Minor ID, as well as their MAC address. A client, such as an iPhone, can use this information to trigger location aware services.

* UUID: 71388410-471b-40dd-8984-c45a38dd4cfe
* Major: 6
* Minor: 1


Contact a Meraki mentor to have your endpoint start receiving the location payloads.


# PNDA

If you want to get more information regarding PNDA, you can check the PNDA website [pnda.io](http://pnda.io/) and the Github [pndaproject](https://github.com/pndaproject)

Also, please find some information regarding the data set available for the hackathon [PNDA dataset](./pnda/data-set.md)


## Tropo

If you are new to Tropo, [read through these resources](https://github.com/ObjectIsAdvantag/hackathon-resources#tropo-starter-guide-voice--sms-phone-communications) to quickly onboard.

As a complement to the online tutorials, you can also take one of these Tropo labs to [build Voice, SMS and Voice + SMS applications](https://github.com/CiscoDevNet/codemotion-milan-2016#add-sms-and-voice-to-your-apps-using-tropo-apis).


**During the event, we will activate your Tropo account for Outbound SMS and Calls.**

Submit your Tropo accout number in the Cisco Spark room to be activated. 


**Morever, we will provide phone numbers in France, for use cases that require this feature.**

These Tropo phone numbers for France are Voice and Text enabled, and bidirectional.

Reach to a Tropo mentor and explain your use case, in order to attach a French number to your application
