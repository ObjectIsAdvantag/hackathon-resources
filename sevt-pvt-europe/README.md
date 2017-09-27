
# Non coding labs

## ["The Business Value of Cloud Collaboration APIs" module](https://learninglabs.cisco.com/modules/business-value-itp)
- non coding labs to experience Cisco Spark APIs capabilities
- 2 hours in total
- part of 2 days training events: "DevNet Express Cloud Collaboration for ITPros" or "Software Developers"

## ["Zapier" labs](https://learninglabs.cisco.com/labs/tags/Zapier)
- non-coding lab, take the mission to go further
- ok for partners, not whitelisted for Cisco internal staf
- 40 min in total


# Coding labs 

## ["Automating Cisco Spark" module](https://learninglabs.cisco.com/modules/automating-spark-itp)
- Python programming
- 5 labs, 2 hours in total
- plus don't miss the extra ["Run a Cisco Spark Bot Locally" lab](https://learninglabs.cisco.com/tracks/devnet-express-cloud-collab-it-pro/creating-spark-bots-itp/collab-spark-botl-itp/step/1)
- part of 2 days training: "DevNet Express Cloud Collaboration for ITPros"

## ["Creating Cisco Spark Bots" module](https://learninglabs.cisco.com/modules/creating-spark-bots-sd)
- NodeJS programming
- 5 labs, 2 hours in total
- part of 2 days training: "DevNet Express Cloud Collaboration for Software Developers"


# More about DevNet labs and events

DevNet labs, modules, and tracks are free learning resources, accessible 24/7 from https://learninglabs.cisco.com

## DevNet Express events

DevNet Express are 2 day training events where you listen, learn and put your knowledge into practice through labs and missions. 

The labs can be accessed from the following tracks: [DevNet Express Cloud Collaboration for ITPros](https://learninglabs.cisco.com/tracks/devnet-express-cloud-collab-it-pro) and [Software Developers](https://learninglabs.cisco.com/tracks/devnet-express-cloud-collab-soft-dev)

If you want to run your own DevNet Express Event, check the [Jive page](https://cisco.jiveon.com/groups/devnet-in-a-box/pages/devnet-express) 


# Flow examples

## Cisco Partners - ITPros

- with good command line / scripting skills
- python 2.7 or 3.5 available on their machine

1. Lab1: [Generating Python Spark API Code using Postman](https://learninglabs.cisco.com/modules/automating-spark-itp/collab-spark-interfacing-with-rest/step/1)**

2. Instructor-led
   - add the postman collection for Cisco Spark
   - get the link from awesome-ciscospark
   - add an environment with your spark_token

3. Lab 2: ['ChatOps' with Cisco Spark and Python](https://learninglabs.cisco.com/modules/automating-spark-itp/collab-spark-chatops-bot-itp/step/1)

4. Instructor-led
   - create a Spark Webhook Integration from the Depot
   - POST to the same ChatOps room

5. Skipped: [Exploring the 'ciscosparkapi' Python Library](https://learninglabs.cisco.com/modules/automating-spark-itp/collab-spark-ciscosparkapi-itp/step/1)

6. Lab 3: [Run a Cisco Spark Bot locally](https://learninglabs.cisco.com/tracks/devnet-express-cloud-collab-it-pro/creating-spark-bots-itp/collab-spark-botl-itp/step/1
)
   - no need to use an IDE, simply run from the command line with env variables 
   - on Mac/Linux
   ```shell
   ACCESS_SPARK_TOKEN=XXXX python run_spark_bot.py
   ```
   - on windows
   ```shell
   set ACCESS_SPARK_TOKEN=XXXX
   python run_spark_bot.py
   ```
