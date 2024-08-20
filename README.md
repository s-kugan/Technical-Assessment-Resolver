The tests have been written in a Selenium-based test automation framework called Nightwatch.js.

Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites across all major browsers. It is written in Node.js and uses the W3C WebDriver API to interact with various browsers.

Nightwatch can also be used for distributed cross-browser end-to-end testing at scale together with the Selenium Server (also known as Selenium Grid), which is an open-source project written in Java that manages a network of WebDriver nodes.

The tests have been organized into two major parts:

Page Object
The Page Objects methodology is a popular pattern for writing end-to-end tests by wrapping the pages or page fragments of a web app into objects. The purpose of a page object is to allow a software client to do anything and see anything that a human can by abstracting away the underlying HTML actions needed to access and manipulate the page. In this technical assessment, I’ve encapsulated all the elements and methods inside the page object and simply called the methods from the test. The page object is under the folder called pages as per Nightwatch’s default setting.

Tests
All the assertions and verifications are in the test file, which is located inside the folder called tests
