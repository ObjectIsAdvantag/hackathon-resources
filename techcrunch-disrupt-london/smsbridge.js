
// QUICK START GUIDE
//
// 1. Create a Cisco Spark bot account, named 'bridge' for example, and store its token
// 2. Create a room, named 'SMS Bridge', store its roomId, and add your 'bridge' bot to the room
// 3. Create a Cisco Spark Chatops bot account, and store its token
// 4. Create 2 Chat rooms, 1 for Logs and 1 for Debug, and add your Chatops bot in there
// 5. Clone this gists and make it private, and edit it
// 6. Replace the bridge bot token and room, as well as the chatops bot token and chat rooms
// 7. Create a Tropo scripting application pointing to your gist raw URL (and remove the revision number to point to the latest version)

//
// Cisco Spark Logging Library for Tropo (leveraging bot tokens)
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
SparkLog.prototype.log = function(newLogEntry) {

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
// Library to send outbound API calls
//

// Returns the JSON object at URL or undefined if cannot be accessed
function requestJSONviaGET(requestedURL) {
    try {
        var connection = new java.net.URL(requestedURL).openConnection();
        connection.setDoOutput(false);
        connection.setDoInput(true);
        connection.setInstanceFollowRedirects(false);
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("charset", "utf-8");
        connection.connect();

        var responseCode = connection.getResponseCode();
        log("JSON_LIBRARY: read response code: " + responseCode);
        if (responseCode < 200 || responseCode > 299) {
            log("JSON_LIBRARY: request failed");
            return undefined;
        }

        // Read stream and create response from JSON
        var bodyReader = connection.getInputStream();
        // [WORKAROUND] We cannot use a byte[], not supported on Tropo
        // var myContents= new byte[1024*1024];
        // bodyReader.readFully(myContents);
        var contents = new String(org.apache.commons.io.IOUtils.toString(bodyReader));
        var parsed = JSON.parse(contents);
        log("JSON_LIBRARY: JSON is " + parsed.toString());

        return parsed;
    }
    catch (e) {
        log("JSON_LIBRARY: could not retreive contents, socket Exception or Server Timeout");
        return undefined;
    }
}

// Returns the Status Code when GETting the URL
function requestStatusCodeWithGET(requestedURL) {
    try {
        var connection = new java.net.URL(requestedURL).openConnection();
        connection.setDoOutput(false);
        connection.setDoInput(true);
        connection.setInstanceFollowRedirects(false);
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("charset", "utf-8");
        connection.connect();

        var responseCode = connection.getResponseCode();
        return responseCode;
    }
    catch (e) {
        log("JSON_LIBRARY: could not retreive contents, socket Exception or Server Timeout");
        return 500;
    }
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
    SparkInfo.log(logEntry);
    // Uncomment if you opt to go for 2 distinct Spark Rooms for DEBUG and INFO log levels
    SparkDebug.log(logEntry);
}

// debug level used to get detail informations
function debug(logEntry) {
    log("DEBUG: " + logEntry);
    SparkDebug.log(logEntry);
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


// Adds the user with email to the room,
// Returns an HTTP status referenced here: https://developer.ciscospark.com/endpoint-memberships-post.html
function addUserToRoom(roomId, email) {
    var client = new SparkClient("BRIDGE_BOT_TOKEN");
    var result = client.createMemberShip(roomId, email);
    return result;
}


// You may check currentCall features here : https://www.tropo.com/docs/scripting/currentcall
if (currentCall) {
    if (currentCall.network == "SMS") { // SMS
        // Check we received a valid email address
        var input = currentCall.initialText;
        debug("received: " + input + ", from: +" + currentCall.callerID);

        // check email is present,
        var extractedEmail = extractEmail(input);
        if (!extractedEmail) { // send Welcome message
            say("Welcome to TechCrunch Disrupt London 2016. Take the Cisco Cloud Collaboration challenge. Win 4.000$ in cash");
            say("Text your email to join the Cisco Spark Support room.");
            info("sent welcome SMS to : +" + currentCall.callerID);
        }
        else { // register to the Sandbox Room
            var supportRoomId = "BRIDGE_ROOM_ID";
            var statusCode = addUserToRoom(supportRoomId, extractedEmail);
            switch (statusCode) {
                case 200:
                    // [TODO] enhance with a short link: "https://web.ciscospark.com/#/rooms/6a480400-32b6-11e6-a2c1-b1ee3f4465dd"
                    say("" + extractedEmail + " successfully added to the Cisco Support Room. Launch Cisco Spark to meet.");
                    info("" + currentCall.callerID + " added to the Cisco Spark support room, with email: " + extractedEmail);
                    break;

                case 409:
                    say("You're all set: already a member of the Cisco Support Room. Launch Cisco Spark to meet.");
                    info("" + currentCall.callerID + " already added to team with email: " + extractedEmail);
                    break;

                default:
                    say("Sorry but we could not add " + extractedEmail + " to the 'Cisco Support' room.");
                    debug("" + currentCall.callerID + " could not be added to team, status:" + statusCode + " with email: " + extractedEmail);
                    break;
            }
        }
        // End of SMS custom logic
    }
}
else {
    info("Script version 20161204-0145");

    if (phonenumber) {
        debug("sending welcome message by SMS to phonenumber");
        call(phonenumber, {network:"SMS"});
        say("Welcome to TechCrunch Disrupt London 2016! Take the Cisco Cloud Collaboration challenge, Win 4.000$ in cash");
    }
}