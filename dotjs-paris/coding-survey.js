// QUICK START GUIDE
//
// 1. Create a Cisco Spark Chatops bot account, and store its token
// 2. Create 2 Chat rooms, 1 for Logs and 1 for Debug, and add your Chatops bot in there
// 3. Clone this script
// 4. Create a Tropo scripting application pointing to this script or a gist raw URL (and remove the revision number to point to the latest version)
// 5. In the script, look for and replace the chatops bot token and chat rooms


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
// Script logic starts here
//

// Let's create several instances for various log levels
var SparkInfo = new SparkLog("CHATOPS_BOT_SPARK_TOKEN", "ACTIVITY_ROOM_ID"); 
var SparkDebug = new SparkLog("CHATOPS_BOT_SPARK_TOKEN", "DEBUG_ROOM_ID");

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


// You may check currentCall features here : https://www.tropo.com/docs/scripting/currentcall
if (currentCall) {
    if (currentCall.network == "SMS") { // SMS
        // Check we received a valid email address
        var input = currentCall.initialText;
        debug("received: " + input + ", from: +" + currentCall.callerID);
    
        // check email is present,
        var choiceJS = parseInt(input);
        if ((!choiceJS) || (choiceJS == 0)) {
               say("Welcome to the Cisco DevNet DotJS challenge! submit your coding preference: 1 (standard JS, NodeJS), 2 (pure ES6), 3 (TypeScript)");
               debug("" + currentCall.callerID + " enters the game");
        }
        else {        
            switch (choiceJS) {
                case 1: 
                    say("Thanks for voting Standard JS");
                    info("" + currentCall.callerID.substring(0,8) + " does standard JS or NodeJS");
                    break;
                case 2:
                    say("Thanks for voting Pure ES6");
                    info("" + currentCall.callerID.substring(0,8) + " does pure ES6");
                    break;
                case 3:
                    say("Thanks for voting TypeScript");
                    info("" + currentCall.callerID.substring(0,8) + " does TypeScript");
                    break;
                default:
                    debug("" + currentCall.callerID.substring(0,8) + " choice not undestood");
                    say("Sorry we did not understand your choice, please choose 1, 2 or 3");
                    break;   
            }
        }
    } // end of SMS

    // voice channel 
    else {
        say("Welcome to DotJS 2016");
        debug("spoke the DotJS welcome invite to " + currentCall.callerID);
        //say("Bienvenue à Dot JS 2016", { voice:"Audrey"});

        wait(500);
        say("To take the survey, text your Javascript coding preference at this number");
        
        wait(500);
        var event = ask("or dial 1 for standard Javascript, dial 2 for ES6, dial 3 for Type Script");
        
        // TODO

    }
}
else {
    debug("Script version 1025");

    if (phonenumber) {
        call(phonenumber, {network:"SMS"});
        say("Welcome to DotJS.io 2016");
    }
}