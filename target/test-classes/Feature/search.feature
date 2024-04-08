@unit
Feature: Retest the testing page

  Scenario: enter the name, phone, number
    Given the url
    When on page enter name Mozaik
    And  enter your email test@test.com
    And enter your phone 123-456-7890
    Then click male radio button

    Scenario: Unit test
      Given the file in app Japan
      When i enter 5 adding 2
      Then i should get 7