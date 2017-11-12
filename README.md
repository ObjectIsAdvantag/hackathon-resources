# Hackathon Resources

Resources for various hackathons and conferences I happened to support


# Cisco Spark Cloud Collaboration APIs

## Cisco Spark Starter Guide (ChatOps, Bots, Video Calls and Meetings)

**Note that Cisco Spark trial gives you free Chating, Audio & Video calls to other Spark users, and meetings with up to 3 members (Chat, Video, Shared-board), 
everything you learn during the hackathon about Spark API, you can reuse after.
Moreover, Spark API support is free, 24/24, 7/7, via [email and #spark4devs room](https://developer.ciscospark.com/support.html)**

To get started with Cisco Spark:
- Sign up for [Cisco Spark](https://www.ciscospark.com/) and reach to [Cisco Spark Web client](https://web.ciscospark.com/)
- [optional] [Install a Spark client](https://www.ciscospark.com/downloads.html) on your laptop and/or mobile phone, and get instant access from all your devices
- Sign in at [Spark for Developers] (https://developer.ciscospark.com) with your Spark account credentials (same as the ones above). This is where you'll get your API access token.

Now, you're ready to test the Cisco Spark APIs:
- Take this popular tutorial to create bots for Cisco Spark ["Create a Conversational Bot" learning lab](https://learninglabs.cisco.com/tracks/collab-cloud/spark-apps/collab-spark-botkit/step/1). 
- Open these examples of HTML code that [embed the Spark Widgets](https://github.com/ObjectIsAdvantag/hackathon-resources/tree/master/hackvivatech-paris/widgets)
- DevNet learning labs: these tutorials explain how to create Spaces and post messages into these, but also how to create Bots and embed Video into existing apps.
   - Get a glimpse of what the APIs provide (Bots and OAuth integrations)[Cisco Spark learning track](https://learninglabs.cisco.com/tracks/collab-cloud)
   - Check the extensive tracks in [NodeJS](https://learninglabs.cisco.com/tracks/devnet-express-cloud-collab-soft-dev) and [Python](https://learninglabs.cisco.com/tracks/devnet-express-cloud-collab-it-pro) that covers common use cases (Automation, Bots and Embedding Video).

Finally, here are extra resources other developers generally find handy:
- [awesome-ciscospark catalog of resources](https://github.com/CiscoDevNet/awesome-ciscospark): this community library of developer resources lists **client SDKS and bot frameworks** for popular programming languages. It also references **existing examples and usefull tools** to code against the Cisco Spark APIs.
- import the [Full scripted Postman collection](https://github.com/CiscoDevNet/postman-ciscospark) to quickly run Cisco Spark requests or generate code of your own


## Tropo Starter Guide (Voice & SMS phone communications)

**Tropo is a set of Cloud APIs to add phone communications capabilities to your applications: Voice and SMS. 
Note that [Tropo](https://tropo.com) is free for developers, 
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
- [Tropo/Spark workshop CLUS](http://www.slideshare.net/CiscoDevNet/cisco-spark-tropo-api-workshop/5) 

