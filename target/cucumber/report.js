$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Retest the testing page",
  "description": "",
  "id": "retest-the-testing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5645709400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "enter the name, phone, number",
  "description": "",
  "id": "retest-the-testing-page;enter-the-name,-phone,-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "on page enter name Mozaik",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter your email test@test.com",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter your phone 123-456-7890",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click male radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "SDLandingPage.aa()"
});
formatter.result({
  "duration": 225963300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mozaik",
      "offset": 19
    }
  ],
  "location": "SDLandingPage.ll(String)"
});
formatter.result({
  "duration": 123255100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 17
    }
  ],
  "location": "SDLandingPage.ldl(String)"
});
formatter.result({
  "duration": 101235500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-456-7890",
      "offset": 17
    }
  ],
  "location": "SDLandingPage.all(int)"
});
formatter.result({
  "duration": 96461700,
  "status": "passed"
});
formatter.match({
  "location": "SDLandingPage.radioBtn()"
});
formatter.result({
  "duration": 70002100,
  "status": "passed"
});
formatter.after({
  "duration": 757689700,
  "status": "passed"
});
});