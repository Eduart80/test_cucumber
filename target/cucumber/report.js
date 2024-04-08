$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Retest the testing page",
  "description": "",
  "id": "retest-the-testing-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@unit"
    }
  ]
});
formatter.before({
  "duration": 6082366400,
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
  "duration": 1431207300,
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
  "duration": 440020900,
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
  "duration": 207607300,
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
  "duration": 155848100,
  "status": "passed"
});
formatter.match({
  "location": "SDLandingPage.radioBtn()"
});
formatter.result({
  "duration": 99493800,
  "status": "passed"
});
formatter.after({
  "duration": 793308600,
  "status": "passed"
});
formatter.before({
  "duration": 3640925800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Unit test",
  "description": "",
  "id": "retest-the-testing-page;unit-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the file in app Japan",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "i enter 5 adding 2",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "i should get 7",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Japan",
      "offset": 16
    }
  ],
  "location": "SDmathClass.aa(String)"
});
formatter.result({
  "duration": 8462503000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "SDmathClass.ll(int,int)"
});
formatter.result({
  "duration": 196400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
  "location": "SDmathClass.ll(int)"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.after({
  "duration": 893721800,
  "status": "passed"
});
});