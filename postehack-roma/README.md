# About PosteHack Mobile @TAG 2016 (Sept 23-25, Roma)

**How to improve the Customer Experience in the Postal Office**

Event page: https://www.eventbrite.it/e/biglietti-poste-hack-2nd-edition-26843665125?aff=es2 

Cisco DevNet event promotion: https://communities.cisco.com/events/1884

Twitter tags: 
- #postehack 
- @Tropo, #CiscoTropo
- @CiscoSparkDev, #CiscoSpark
- @stamplay 
- @CiscoDevNet 
- @PosteNews 
- @TalentGardenit


## How to get support ?

- Come to Cisco Meeting point and get your email address added to the "PosteHack Support Cisco Stamplay @Talent Garden" room.  This is your 2nd place where to get information and support  for the whole week-end. Should I mention: 1st place is to reach to us directly !
- Register your email on Spark https://www.ciscospark.com/
- [Optional] install Spark on your laptop or Mobile : https://www.ciscospark.com/downloads.html


## Technologies / Mentors

Home page for featured technologies: https://postehack.stamplayapp.com/
- CiscoSpark & Tropo (Cloud API): Antonio Lombardi, Stève Sfartz (Cisco)
    - [Deck on slideshare](http://www.slideshare.net/SteveSfartz/hackathon-poste-mobile-2016-cisco-roma-tag-talentgardenit)
- CMX (using the Meraki infrastructure @TAG): Luca Lironi, Alessandro Oliveri (Cisco)
- Stamplay: Alessandro, Claudio (from Stamplay)

### Cisco Spark API Starter Guide

- Signin at https://developer.ciscospark.com with your Spark account credentials (same as the ones above) 
- Take the Rooms learning lab at DevNet - Cisco Developer Network: https://developer.ciscospark.com/samples-tutorials.html
- Experiment some Cisco Spark bots written in nodejs: https://github.com/ObjectIsAdvantag/sparkbot-webhook-samples
- POSTMAN collection for Cisco Spark API: https://bit.ly/POSTMAN-SPARK-API  
- Look for other Spark resources in various languages : https://github.com/CiscoDevNet/awesome-ciscospark


### Tropo Starter Guide

1. Signup at tropo.com
2. Create a Scripting application
3. Either point to one of these script, or copy/paste one in the code editor (new script)
	- If you want to build an IVR Voice Response , you can start from https://gist.githubusercontent.com/ObjectIsAdvantag/ae6c5181eccd194fc1bf79fc44b05e76/raw/tropo-IVR-hackposte-tag-2016.js
	- If you want to send/receive SMS, you can start from https://gist.githubusercontent.com/ObjectIsAdvantag/bde432e0608a3a8e0fc4f2cd6301bf44/raw/tropo-SMS-bidirectional.js  
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
	- Look for the token url links at the bottom of your application page.
	- Click show URL, and copy paste it in Postman
	- Add the parameter phonenumber and your mobile number
	- Click send to receive a SMS

You're all set, now it is time to enhance your script. Here are a few resources to help you start:
- Tropo-samples: https://github.com/tropo/tropo-samples 
- Tropo-uses-cases: http://usecases.tropo.com/ 
- Tropo-scripting-reference: https://www.tropo.com/docs/scripting/reference 
- Tropo ChatOps: https://www.tropo.com/2016/06/devops-follow-tropo-spark/ 
- Tropo/Spark workshop CLUS 2016: http://www.slideshare.net/CiscoDevNet/cisco-spark-tropo-api-workshop/5 


## Agenda

- September, 23rd
    - 4.45 pm – Kick off workshop Cisco
    - 5.00 pm – Cisco – together with Stamplay - meets the developers: a workshop focused on technologies and APIs available during this hackathon
    - 6.00 pm – Opening event in the event room Enrico Gasperini at Talent Garden Poste Italiane:
        - Welcome speech by Poste Italiane, Cisco, Stamplay, Digital
        - Magics, Talent Garden
        - Introduction about themes, challenges, jury and mentors
        - Short description of the schedule, program and rules of the hackathon
    - 6.45 pm – team formation
    - 7.00 pm - aperitif
    - 10.00 pm – start coding
    - Midnight – stop coding (TAG closes)

- September, 24th
    - 9.00 am – breakfast
    - 10.00 am – start coding
    - 11.00 am – mentoring session
    - 1.00 pm – lunch
    - 3.00 pm– mentoring session
    - 8.00 pm – dinner
    - 10 pm– re-start the all night long coding

- September, 25th
    - 9.00 am – breakfast
    - 10.00 am – start coding
    - 1.00 pm – Sunday brunch
    - 2.00 pm – re-start coding
    - 5.00 pm – stop coding and project issue
    - 6.00 – Grand finale of Hackathon Poste Italiane 2016 – 2nd edition
        - Brief welcome speech by Poste Italiane, Cisco, Stamplay
        - Pitches of the project
        - Jury discussion
        -  Awards cerimony
    - 7.00 – Final toast on the rooftop

