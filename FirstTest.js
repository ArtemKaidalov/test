const { By, Key } = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");
const assert = require ("assert")

async function exemple(){
    //launch the browser 
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to our application
    await driver.get("https://chrome.google.com/webstore?hl=uk")
    //add a todo
    await driver.findElement(By.id("searchbox-input")).sendKeys("javascript", Key.ENTER);

    //assert
    let todoText = await driver.findElement(By.xpath(""))

    //close the browser
    //await driver.quit();

}
exemple()