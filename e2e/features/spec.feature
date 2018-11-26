Feature: Gmail actions
    Scenario: Log In into test account 
        Given The user go to "https://www.gmail.com"
        When The user "qervy.test.e2e" and password "r6KoGcBpr98j" attempt to login
        Then Successfully loged into "qervy.test.e2e" inbox

    Scenario: Test account will be loged out
        When The user "qervy.test.e2e" remain loged in
        Then Attempt to log out from inbox
