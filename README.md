# Hackathon Resources

Resources for various hackathons I happened to support


## Cisco Spark Starter Guide

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


## Tropo Starter Guide

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

