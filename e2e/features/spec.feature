Feature: Gmail actions
    Scenario: Log In into test account 
        Given The user go to "https://www.gmail.com"
        When The user "qervy.test.e2e" and password "r6KoGcBpr98j" attempt to login
        Then Successfully loged into "qervy.test.e2e" inbox

    Scenario: The test account will send an email 
        When The user "qervy.test.e2e" remain loged in
        Then User press new button message 
        Then User writes a message to "qervy.test.e2e"
        Then User send message
        Then Verify email reception
        Then Delete first mail from inbox
    
    Scenario: Test account will be loged out
        When The user clicks on profile button
        Then Attempt to log out from inbox
