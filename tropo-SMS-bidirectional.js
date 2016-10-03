if (currentCall) {
    choice = currentCall.initialText.toLowerCase();
    if ((choice.startsWith("yes")) || (choice.startsWith("yep")) || (choice.startsWith("sure")) || (choice.startsWith("oui")))  {
        say("go get some !");
    }
    else {
        if ((choice.startsWith("no")) || (choice.startsWith("non"))) {
            say("well, I am not a big coffee drinker myself neither...");
        }
        else {
            say("sorry, I did not get your answer.");
        }
    }
}
else {
    call(phonenumber, { "network":"SMS" });
    say("what about coffee ? (yes/no)");
}