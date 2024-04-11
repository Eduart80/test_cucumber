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
  "duration": 8251235500,
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
  "duration": 318517900,
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
  "duration": 197830800,
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
  "duration": 145489000,
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
  "duration": 120297600,
  "status": "passed"
});
formatter.match({
  "location": "SDLandingPage.radioBtn()"
});
formatter.result({
  "duration": 105244400,
  "status": "passed"
});
formatter.after({
  "duration": 1192491800,
  "status": "passed"
});
formatter.before({
  "duration": 4952845400,
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
  "duration": 629739000,
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
  "duration": 176000,
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
  "duration": 122900,
  "status": "passed"
});
formatter.after({
  "duration": 789362400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "math test",
  "description": "",
  "id": "retest-the-testing-page;math-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the numbers \u003cnumb1\u003e and \u003cnumb2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i should have \u003cres\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "retest-the-testing-page;math-test;",
  "rows": [
    {
      "cells": [
        "numb1",
        "numb2",
        "res"
      ],
      "line": 21,
      "id": "retest-the-testing-page;math-test;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "5"
      ],
      "line": 22,
      "id": "retest-the-testing-page;math-test;;2"
    },
    {
      "cells": [
        "3",
        "1",
        "4"
      ],
      "line": 23,
      "id": "retest-the-testing-page;math-test;;3"
    },
    {
      "cells": [
        "1",
        "0",
        "1"
      ],
      "line": 24,
      "id": "retest-the-testing-page;math-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3494184100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "math test",
  "description": "",
  "id": "retest-the-testing-page;math-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@unit"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the numbers 2 and 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i should have 5",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    },
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "SDmathClass.addingTest(int,int)"
});
formatter.result({
  "duration": 2184700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "SDmathClass.resultMath(int)"
});
formatter.result({
  "duration": 3203000,
  "status": "passed"
});
formatter.after({
  "duration": 719913100,
  "status": "passed"
});
formatter.before({
  "duration": 4351601600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "math test",
  "description": "",
  "id": "retest-the-testing-page;math-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@unit"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the numbers 3 and 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i should have 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    },
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "SDmathClass.addingTest(int,int)"
});
formatter.result({
  "duration": 123500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "SDmathClass.resultMath(int)"
});
formatter.result({
  "duration": 79300,
  "status": "passed"
});
formatter.after({
  "duration": 759199100,
  "status": "passed"
});
formatter.before({
  "duration": 3597869300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "math test",
  "description": "",
  "id": "retest-the-testing-page;math-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@unit"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the numbers 1 and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i should have 1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    },
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "SDmathClass.addingTest(int,int)"
});
formatter.result({
  "duration": 222200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "SDmathClass.resultMath(int)"
});
formatter.result({
  "duration": 140400,
  "status": "passed"
});
formatter.after({
  "duration": 740547000,
  "status": "passed"
});
});