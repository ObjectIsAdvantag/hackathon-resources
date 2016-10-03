if (!currentCall) { // No tropo session yet => this is an outgoing call initiated via Tropo token url
    var offset = +2;  // CET+2
    var now = new Date(Date.now() + (3600000 * offset));
    call(phonenumber);
    say("it is now " + now.getHours() + ":" + now.getMinutes() + " in Paris, Rome, Madrid, Berlin, Zurich and Amsterdam.");
    wait(500);

    offset = +1;  // CET+1
    now = new Date(Date.now() + (3600000 * offset));
    say("note that it is now " + now.getHours() + ":" + now.getMinutes() + " in Lisbon, London and Dublin.");
}

else { // Session initiated => this is an incoming call
    answer();

    wait(1000); // On-boarding pause : do not speak too quickly the IVR

    // Pick a voice depending on your language & preference (male/female)
    // https://www.tropo.com/docs/scripting/international-features/speaking-multiple-languages
    var currentVoice = "Ava"; // Allison, Ava, Samantha, Susan, Veronica, Vanessa (Default), Tom, Victor

    log("speaking the welcome invite to: +" + currentCall.callerID);
    say("Hello, Welcome to the Hackathon  !", { voice: currentVoice });
    wait(500);

    say("What about learning Cisco Spark and Tropo API ?", { voice: currentVoice });
    wait(1000);

    // SSML: https://www.tropo.com/docs/scripting/advanced-speech-control/manipulating-say-ssml
    event = ask("<speak>Dial 1 to receive instructions by SMS <break time='500ms'/> Dial 2 to get the name of the winner</speak>", {
                voice: currentVoice,
                choices: "1,2",
                timeout: 5,
                attempts: 3,
                mode: "dtmf", // dial tone only as we are in an open conference room
                onTimeout: function(event) {
                    say("Sorry, I didn't hear your choice.", { voice: currentVoice });
                },
                onBadChoice: function(event) {
                    say("Sorry, I didn't understand what you said.",  { voice: currentVoice });
                }
    });

    if (event.name == 'choice') {
        var selected = parseInt(String(event.value));
        switch (selected) {
            case 1:
                say("Got it, we are texting you the instructions.", { voice: currentVoice });

                // Send a SMS from a new Tropo session
                log("sending details via SMS to: +" + currentCall.callerID);
                var forkedCall = call(currentCall.callerID, {
                    network: "SMS"
                });
                forkedCall.value.say("Welcome to the Cisco Spark and Tropo challenge.");
                forkedCall.value.hangup();
                break;

            case 2:
            default:
                log("running the challenge via Tropo: +" + currentCall.callerID);
                
                // [TODO] Implement takeChallenge()
                say("Sorry, cheat mode is not implemented yet !", { voice: currentVoice });
                break;
        }
    }

    // Finish the conversation gently
    wait(500);
    say("Thanks and see you at the Cisco booth. Bye Bye.",  { voice: currentVoice });
    wait(1000);
    hangup();
}