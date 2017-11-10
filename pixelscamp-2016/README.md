# About Pixels Camp 2016 (Oct 6-8, Lisbon)


**Integrate Cisco APIs in your hack and win [Meraki Cloud Managed Wifi Hardware](https://meraki.cisco.com/products/wireless)**

> - Tropo for phone communications (Voice & SMS)
> - Meraki for Wifi integration (presence, location, landing page).
> - Total prizes of up to 20 K€ of Meraki hardware

Read through the [Cisco APIs Challenge](#cisco-apis-challenge) below for details

**Give a try to the Tropo IVR by calling +351308801061, and [check the code](https://github.com/ObjectIsAdvantag/pixelscamp2006)**


## Event information

Event organizers : https://pixels.camp/ 

Cisco DevNet event promotion: https://communities.cisco.com/events/1884

Twitter tags: 
- @pixelscamp, #pixelscamp 
- @CiscoDevNet 
- @Tropo, #CiscoTropo
- @CiscoSparkDev, #CiscoSpark
- @meraki, #meraki


## Cisco TechTalks

### An interactive Voice & Chat for the Pixel Camp event

Willing to be aware of your visitors journey in real-time ? 
Or interact with end-users by sending and answering calls & text messages automatically ? 
What about deploying custom code logic onto your network to analyse data close to your IoT devices ?  
Interested in deploying your own interactive assistant to request or take action into business back-end processes ? 
Here are a few possibilities offered by the Cisco REST APIs which can be freely accessed from DevNet - Cisco Developer Program.
 
We’ll first detail how to access DevNet resources, 
and then dig into the construction of an Interactive Voice and Chat assistant. 
In practice, we will drive you through Javascript source codes that leverage the Cisco Spark & Tropo REST APIs to answer the phone, 
read from external APIs, do real-time voice recognition, and send SMS in forked sessions. 

This session is for intermediate developers, with or without experience in Javascript, 
as all examples can be translated to other languages. 

Worth adding the Tropo APIs is free for developers, and supports not only Javascript but also PHP, Ruby, Groovy and Python.


### Who Says That a Crystal Ball Is The Only Way To Predict Cyber-Attacks?

Connecting the dots, being able to analyze a diverse set of information made of billions of pieces of discrete data allows to build the maps 
that reveal where the malicious infrastructure is hidden and where the attacks are staged. 

This turns the table of traditional security with a new approach where the defender takes the upper hand on the attacker, 
being able to pivot through the criminal infrastructure.


## Cisco APIs Challenge

We'll give away one [Meraki Access Point Hardware]((https://meraki.cisco.com/products/wireless)) for each of the best prototypes embedding the Meraki & Tropo APIs,
and for up to a total value of 20 K€ Meraki Hardware. 

The Meraki technology lets you build outstanding applications by interacting with the Wifi Network.
Here are the typical use cases :
- detect presence from Mobile phones that have Wifi or Bluetooth activated,
- customize the landing page as users join your Wifi Network
- geo-locate your users via Wifi triangulation

Read [support section below](#how-to-get-support) for more info about [Cisco Spark](#cisco-spark-api-starter-guide), [Tropo](#tropo-starter-guide) & [Meraki](#meraki-starter-guide) APIs.


### How to get support

- Come to the Cisco Booth and get your email address added to the CiscoSpark room: "PixelsCamp Tek Support" room.  This is your 2nd place where to get information and support. Should we mention: 1st place is to reach to us directly !
- Register your email on Spark https://www.ciscospark.com/
- [Optional] install Spark on your laptop or Mobile : https://www.ciscospark.com/downloads.html

Here are the technologies featured for the whole event, and related mentors:

- Tropo (Phone communication API): Austin Hyland, John Higgins, Stève Sfartz (Cisco)
- Meraki (Wifi API): Rui Bras Fernandes, Stève Sfartz  (Cisco)
- CiscoSpark (messaging, calls and meetings platform): Austin Hyland, John Higgins, Stève Sfartz (Cisco)


### Tropo Starter Guide

**Note that [Tropo](https://tropo.com) is free for developers, 
everything you learn during the hackathon, you can reuse after.
Moreover, [Tropo support](https://www.tropo.com/help/) is also free, 24/24, 7/7, via IRC or [email](mailto:support@tropo.com)**

1. Signup at [Tropo.com](https://tropo.com)
2. Create a Scripting application
3. Either point to one of these script, or copy/paste one in the code editor (new script) and name your file script.js
	- if you want to build an IVR Voice Response, pick this [IVR script sample URL](https://gist.githubusercontent.com/ObjectIsAdvantag/ae6c5181eccd194fc1bf79fc44b05e76/raw/tropo-IVR-hackposte-tag-2016.js),
	- if you want to send/receive SMS, pick this [SMS script sample URL](https://gist.githubusercontent.com/ObjectIsAdvantag/bde432e0608a3a8e0fc4f2cd6301bf44/raw/tropo-SMS-bidirectional.js)   
4. Create your application
5. Then pick one or several phone numbers
	- if you do Voice Call, pick an Italian phone number 
		- Note that you will not be authorized to call mobile phones for cost reasons (contact your Tropo mentor for workarounds)
	- if you do SMS messaging, pick a US phone number in Milwaukee area
		- Note that your Tropo account will need to be activated to send SMS (contact your Tropo mentor to get activated, please note your Tropo account number located in the upper right corner of the Tropo dashboard when signed in : 505XXXX
	- if you do both SMS & Voice, pick a number in Italy and US (see details above)
6. You're now ready to test your scripts. 
7. If you chose an IVR, call your Tropo number. You'll be spoken the welcome message. If your number cannot be reached, retry in a few minutes to give time for Tropo to complete the provisionning.
8. If you chose SMS, you need to do call the Tropo API with a GET method and query parameters.
	- Look for the token url links at the bottom of your application page.
	- Click show URL, and copy paste it in Postman
	- Add the query parameter phonenumber and your mobile number: &phonenumber=+33678007800
	- Click send to receive your SMS

You're all set, now it is time to enhance your script. 
Here are a few resources to help you start:
- [Tropo-samples](https://github.com/tropo/tropo-samples) 
- [Tropo-uses-cases](http://usecases.tropo.com/) 
- [Tropo-scripting-reference](https://www.tropo.com/docs/scripting/reference) 
- [Tropo ChatOps](https://www.tropo.com/2016/06/devops-follow-tropo-spark/) 
- [Tropo/Spark workshop CLUS 2016](http://www.slideshare.net/CiscoDevNet/cisco-spark-tropo-api-workshop/5) 



### Cisco Spark API Starter Guide

**Note that Cisco Spark trial gives you free chating, calls to other Spark users, and meetings in room with up to 3 members, 
everything you learn during the hackathon about Spark API, you can reuse after.
Moreover, Spark API support is free, 24/24, 7/7, via [email and #spark4devs room](https://developer.ciscospark.com/support.html)**

- Sign up for [Cisco Spark](https://www.ciscospark.com/) and get access to the Spark Web client (available on for all OS)
- [optional] [Install a Spark client](https://www.ciscospark.com/downloads.html) on your laptop and/or mobile phone, and get instant access everywhere

- Sign in at [Spark for Developers] (https://developer.ciscospark.com) with your Spark account credentials (same as the ones above). This is where you'll get your Spark API access token.
- Take the [Using Rooms & Messages Learning Lab](https://developer.ciscospark.com/samples-tutorials.html) at DevNet - Cisco Developer Network,
- [Experiment a Cisco Spark bot](https://github.com/ObjectIsAdvantag/sparkbot-webhook-samples) in nodejs,
- [optional] import the [Postman collection](https://github.com/CiscoDevNet/postman-ciscospark) for CiscoSpark to quickly generate code,
- Check [awesome resources](https://github.com/CiscoDevNet/awesome-ciscospark) to get code samples and SDKs in various languages,



### Meraki Starter Guide

**Cisco Meraki lets you build outstanding applications that interact with the Wifi Network.
Popular use cases include: detect presence from Mobile phones that have Wifi or Bluetooth activated, customize the landing page as users join your Wifi Network, or geo-locate your users via Wifi triangulation**

- Sign up at [Meraki](http://developers.meraki.com/apply) and get access to the Meraki dashboard. The Meraki Cloud Management platform _the Meraki dashboard_ makes it easy to configure your Wifi networks, view analytics, and connect your applications.

- Get started thanks the [Meraki APIs resources for developers](http://developers.meraki.com/start), and go through the [Hackathon resources](http://developers.meraki.com/hackathon)

- Deploy the [CMX location data receiver](https://github.com/ObjectIsAdvantag/cmxreceiver) on your favorite platform, and come to the Cisco booth to get registered, and share your Meraki Validator key and Webhook secret.

- You'll then get access to the JSON location payload about every minute:

``` json
Secret verified
JSON Feed: {
  "version": "2.0",
  "secret": "VERY_SECRET",
  "type": "DevicesSeen",
  "data": {
    "apMac": "00:18:0a:33:79:5c",
    "apFloors": [],
    "apTags": [
      "",
      "recently-added",
      ""
    ],
    "observations": [
      {
        "ipv4": null,
        "location": {
          "lat": 38.702158703698416,
          "lng": -9.17837793007493,
          "unc": 29.510372063481228,
          "x": [],
          "y": []
        },
        "seenTime": "2016-10-07T06:55:20Z",
        "ssid": null,
        "os": null,
        "clientMac": "38:71:de:81:5e:61",
        "seenEpoch": 1475823320,
        "rssi": 36,
        "ipv6": null,
        "manufacturer": "Apple"
      },
      {
        "ipv4": null,
        "location": {
          "lat": 38.702158703698416,
          "lng": -9.17837793007493,
          "unc": 27.667815359956506,
          "x": [],
          "y": []
        },
        "seenTime": "2016-10-07T06:55:19Z",
        "ssid": null,
        "os": null,
        "clientMac": "58:82:a8:af:e8:15",
        "seenEpoch": 1475823319,
        "rssi": 22,
        "ipv6": null,
        "manufacturer": "Microsoft"
      },
      ...
    ]
  }
}
```


