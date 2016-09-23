# Hackathon Resources

Resources for various hackathons I happened to support


## Cisco Spark Starter Guide

- Signin at https://developer.ciscospark.com with your Spark account credentials (same as the ones above) 
- Take the Rooms learning lab at DevNet - Cisco Developer Network: https://developer.ciscospark.com/samples-tutorials.html
- Experiment some Cisco Spark bots written in nodejs: https://github.com/ObjectIsAdvantag/sparkbot-webhook-samples
- POSTMAN collection for Cisco Spark API: https://bit.ly/POSTMAN-SPARK-API  
- Look for other Spark resources in various languages : https://github.com/CiscoDevNet/awesome-ciscospark


## Tropo Starter Guide

1. Signup at tropo.com
2. Create a Scripting application
3. Either point to one of these script, or copy/paste one in the code editor (new script)
	- If you want to build a Voice IVR, pick 
	- If you want to send / receive SMS, pick
4. Create your application
5. Then pick one or several phone numbers
	- if you do Voice Call, pick an Italian phone number 
		- Note that you will not be authorized to call mobile phones for cost reasons (contact your Tropo mentor for workarounds)
	- if you do SMS messaging, pick a US phone number in Milwaukee area
		- Note that your Tropo account will need to be activated to send SMS (contact your Tropo mentor to get activated, please note your Tropo account number located in the upper right corner of the Tropo dashboard when signed in : 505XXXX
	- If you do both SMS & Voice, pick a number in Italy and US (see details above)
6. You're now ready to test your scripts. 
7. If you chose an IVR, call your Tropo number. You'll be spoken the welcome message. If your number cannot be reached, retry in a few minutes to give time for Tropo to complete the provisionning.
8. If you chose SMS, you need to do call the Tropo API with a GET method and query parameters.
	• Look for the token url links at the bottom of your application page.
	• Click show URL, and copy paste it in Postman
	• Add the parameter phonenumber and your mobile number
	• Click send to receive a SMS

You're all set, now it is time to enhance your script. Here are a few resources to help you start:
- Tropo-samples: https://github.com/tropo/tropo-samples 
- Tropo-uses-cases: http://usecases.tropo.com/ 
- Tropo-scripting-reference: https://www.tropo.com/docs/scripting/reference 
- Tropo ChatOps: https://www.tropo.com/2016/06/devops-follow-tropo-spark/ 
- Tropo/Spark workshop CLUS 2016: http://www.slideshare.net/CiscoDevNet/cisco-spark-tropo-api-workshop/5 
