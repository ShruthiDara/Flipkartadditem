$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/Filpkart.feature");
formatter.feature({
  "line": 1,
  "name": "Flipkart Website Feature",
  "description": "",
  "id": "flipkart-website-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33873560389,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User Add product in cart Scenario",
  "description": "",
  "id": "flipkart-website-feature;user-add-product-in-cart-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Application  Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects product",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User click Product",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click on ADD TO CART",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_Application_Page()"
});
formatter.result({
  "duration": 22261219257,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_selects_product()"
});
formatter.result({
  "duration": 6399554109,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-N8MSEAI\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\DARASH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62896}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3a9cca179b1b6ecb9553a7e307efc16b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat stepdefinations.Steps.user_selects_product(Steps.java:37)\r\n\tat ???.Then User selects product(src/main/java/Feature/Filpkart.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_Product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_click_on_ADD_TO_CART()"
});
formatter.result({
  "status": "skipped"
});
});