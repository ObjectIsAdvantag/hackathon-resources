// QUICK START GUIDE
//
// 1. Create a Cisco Spark Chatops bot account, and store its token
// 2. Create 2 Chat rooms, 1 for Logs and 1 for Debug, and add your Chatops bot in there
// 3. Clone this script
// 4. Replace the chatops bot token and chat rooms
// 5. Create a Tropo scripting application pointing to your gist raw URL (and remove the revision number to point to the latest version)

//
// Cisco Spark Logging Library for Tropo (based on bots)
//

// Factory for the Spark Logging Library, with 2 parameters
//    - the token of the ChatOps bot,
//    - the room Id in which the bot should write its logs
function SparkLog(token, roomId) {

    if (!token) {
        log("SPARK_LOG : bad configuration, no Spark token specified, exiting...");
        throw createError("SparkLog configuration error: no Spark token specified");
    }
    this.token = token;

    if (!roomId) {
        log("SPARK_LOG : bad configuration, no Spark room identifier specified, exiting...");
        throw createError("SparkLog configuration error: no Spark room identifier specified");
    }
    this.roomId = roomId;

    log("SPARK_LOG: all set with SparkLog to room: " + this.roomId);
}

// This function sends the log entry to the registered Cisco Spark Room
// Returns true if the log entry was acknowledge by Spark (ie, got a 2xx HTTP status code)
SparkLog.prototype.log2spark = function(newLogEntry) {

    // Robustify
    if (!newLogEntry) {
        newLogEntry = "";
    }

    var result;
    try {
        // Open Connection
        var url = "https://api.ciscospark.com/v1/messages";
        var connection = new java.net.URL(url).openConnection();

        // Set timeout to 10s
        connection.setReadTimeout(10000);
        connection.setConnectTimeout(10000);

        // Method == POST
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Authorization", "Bearer " + this.token);
        connection.setRequestProperty("Content-Type", "application/json");

        // TODO : check if this cannot be removed
        connection.setRequestProperty("Content-Length", newLogEntry.length);
        connection.setUseCaches(false);
        connection.setDoInput(true);
        connection.setDoOutput(true);

        //Send Post Data
        var bodyWriter = new java.io.DataOutputStream(connection.getOutputStream());
        log("SPARK_LOG: posting: " + newLogEntry + " to: " + url);
        var contents = '{ "roomId": "' +  this.roomId + '", "text": "' + newLogEntry + '" }';
        log("SPARK_LOG: posting: " + contents);
        bodyWriter.writeBytes(contents);
        bodyWriter.flush();
        bodyWriter.close();

        var result = connection.getResponseCode();
        log("SPARK_LOG: read response code: " + result);

        if (result < 200 || result > 299) {
            log("SPARK_LOG: could not log to Spark, message format not supported");
            return false;
        }
    }
    catch (e) {
        log("SPARK_LOG: could not log to Spark, socket Exception or Server Timeout");
        return false;
    }

    log("SPARK_LOG: log successfully sent to Spark, status code: " + result);
    return true; // success
}


//
// Cisco Spark Client Library for Tropo
//

// Factory for the Spark Library, with parameters:
//    - the Spark API token
function SparkClient(spark_token) {

    if (!spark_token) {
        log("SPARK_CLIENT : bad configuration, no API token, exiting...");
        throw createError("SparkClient configuration error: no API token specified");
    }
    this.token = spark_token;

    log("SPARK_CLIENT: all set; ready to invoke Cisco Spark");
}

// Returns a status code
SparkClient.prototype.createMemberShip = function(roomID, email) {

    // Robustify
    if (!roomID) {
        return 400;
    }
    if (!email) {
        return 400;
    }

    var result;
    try {
        // Open Connection
        var url = "https://api.ciscospark.com/v1/memberships";
        var connection = new java.net.URL(url).openConnection();

        // Set timeout to 10s
        connection.setReadTimeout(10000);
        connection.setConnectTimeout(10000);

        // Method == POST
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Authorization", "Bearer " + this.token);

        // Prepare payload
        var payload = '{ "roomId": "' + roomID + '", "personEmail": "' + email + '", "isModerator": "false" }'

        // [TODO] Check if this cannot be removed
        connection.setRequestProperty("Content-Length", payload.length);
        connection.setUseCaches(false);
        connection.setDoInput(true);
        connection.setDoOutput(true);

        //Send Post Data
        var bodyWriter = new java.io.DataOutputStream(connection.getOutputStream());
        log("SPARK_CLIENT: posting: " + payload + " to: " + url);
        bodyWriter.writeBytes(payload);
        bodyWriter.flush();
        bodyWriter.close();

        result = connection.getResponseCode();
        log("SPARK_CLIENT: read response code: " + result);

    }
    catch (e) {
        log("SPARK_CLIENT: could not log to Spark, socket Exception or Server Timeout");
        return 500;
    }

    if (result < 200 || result > 299) {
        log("SPARK_CLIENT: could not add user with email: " + email + " to room:" + roomID);
    }
    else {
        log("SPARK_CLIENT: user with email: " + email + " added to room:" + roomID);
    }

    return result; // success
}



//
// Script logic starts here
//

// Let's create several instances for various log levels
var SparkInfo = new SparkLog("CHATOPS_BOT_TOKEN", "CHATOPS_INGO_ROOM_ID"); 
var SparkDebug = new SparkLog("CHATOPS_BOT_TOKEN", "CHATOPS_DEBUG_ROOM_ID");

// info level used to get a synthetic sump up of what's happing
function info(logEntry) {
    log("INFO: " + logEntry);
    SparkInfo.log2spark(logEntry);
    // Uncomment if you opt to go for 2 distinct Spark Rooms for DEBUG and INFO log levels
    //SparkDebug.log2spark(logEntry);
}

// debug level used to get detail informations
function debug(logEntry) {
    log("DEBUG: " + logEntry);
    SparkDebug.log2spark(logEntry);
}


// Adds the user with email to the room,
// Returns an HTTP status referenced here: https://developer.ciscospark.com/endpoint-memberships-post.html
function addUserToRoom(roomId, email) {
    var client = new SparkClient("BRIDGE_BOT_TOKEN");
    var result = client.createMemberShip(roomId, email);
    return result;
}


// returns true or false
function isEmail(email) {
    // extract from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// returns an email address if found in the phrase specified
function extractEmail(phrase) {
    if (phrase) {
        var parts = phrase.split(" ");
        for (var i = 0; i < parts.length; i++) {
            if (isEmail(parts[i])) {
                return parts[i];
            }
        }
    }
    return null;
}

// returns a positive integer if any if found in the phrase specified
function extractNumber(phrase) {
    if (phrase) {
        var parts = phrase.split(" ");
        for (var i = 0; i < parts.length; i++) {
            var number = parseInt(parts[i]);
            if ((number) && (number > 0)) {
                return number;
            }
        }
    }
    return null;
}


// You may check currentCall features here : https://www.tropo.com/docs/scripting/currentcall
if (currentCall) {
    if (currentCall.network == "SMS") { // SMS
        // Check we received a valid email address
        var input = currentCall.initialText;
        debug("received: " + input + ", from: +" + currentCall.callerID);

        // detect email address for Spark on-boarding
        // check email is present,
        var extractedEmail = extractEmail(input);
        if (extractedEmail) {
            var supportRoomId = "SUPPORT_ROOM_ID";
            var statusCode = addUserToRoom(supportRoomId, extractedEmail);
            switch (statusCode) {
                case 200:
                    // [TODO] enhance with a short link: "https://web.ciscospark.com/#/rooms/6a480400-32b6-11e6-a2c1-b1ee3f4465dd"
                    say("" + extractedEmail + " successfully added to the Hackathon Support room. Launch Cisco Spark to meet.");
                    info("" + currentCall.callerID.substring(0,8) + " added to the Cisco Spark support room, with email: " + extractedEmail);
                    break;

                case 409:
                    say("You're all set: already a member of the Hackathon Support room. Launch Cisco Spark to meet.");
                    info("" + currentCall.callerID.substring(0,8) + " already added to room with email: " + extractedEmail);
                    break;

                default:
                    say("Sorry but we could not add " + extractedEmail + " to the 'Hackathon Support' room.");
                    debug("" + currentCall.callerID + " could not be added to room, status:" + statusCode + " with email: " + extractedEmail);
                    break;
            }
        }
        else {
        
            // detect number for Vote
            var choiceJS = extractNumber(input);
            if ((!choiceJS) || (choiceJS == 0)) {
                say("Welcome to the City'Zen Bots Hackathon! Text your email to this number to join the Cisco Spark support room.");
                wait(2000);
                say("or Text your expectations: 1 if idea ok, looking for participants. 2 looking for a team to join. 3 you are good, idea & team, 4 Other");
                debug("" + currentCall.callerID + " enters the game");
            }
            else {        
                switch (choiceJS) {
                    case 1: 
                        say("Thanks for voting 1 'You have an idea, and you hope that other participants will join you'");
                        info("" + currentCall.callerID.substring(0,8) + " looks for people to join his idea");
                        break;
                    case 2:
                        say("Thanks for voting 2. 'You are looking for a team to join'");
                        info("" + currentCall.callerID.substring(0,8) + " is looking for a team to join");
                        break;
                    case 3:
                        say("Thanks for voting 3. 'You're good: have an idea and a team'");
                        info("" + currentCall.callerID.substring(0,8) + " is good to go!");
                        break;
                    case 4:
                        say("Thanks for voting 4. 'We are happy to have you join the crew !'");
                        info("" + currentCall.callerID.substring(0,8) + " is looking around...");
                        break;
                    default:
                        debug("" + currentCall.callerID.substring(0,8) + " choice not undestood");
                        say("Sorry we did not understand your choice, please choose 1, 2, 3 or 4");
                        break;   
                }
            }
        }
    } // end of SMS

    // voice channel 
    else {
        say("Welcome to City'Zen Bots 2016");
        debug("spoke the welcome invite to " + currentCall.callerID);
        
        wait(500);
        say("In order to join the Hackathon support room, please text your email to this number");
        
        wait(500);
        say("In order take the survey, text your expectations to this number.");
        wait(500);
        say("Type 1 if you have an idea and you hope other participants will join you");
        wait(500);
        say("Type 2 if you don't have an idea and you are looking forward to join an existing team");
        wait(500);
        say("Type 3 if you're good: you have both an idea and a team to hack with");
        wait(500);
        say("Type 4 if none of the above fits you, anyway we're happy to have you in");
        
        wait(100);
        say("Hope you'll have fun, Good bye");
        hangup();
    }
}
else {
    debug("Script version 1548");

    if (phonenumber) {
        call(phonenumber, {network:"SMS"});
        say("Welcome to the City'Zen Bots Hackathon! Text your email to this number to join the Cisco Spark support room.");
        wait(2000);
        say("or Text your expectations: 1 if idea ok, looking for participants. 2 looking for a team to join. 3 you are good, idea & team, 4 Other");
    }
}