// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('login_negatif', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login_negatif', async function() {
    // Test name: login_negatif
    // Step # | name | target | value
    // 1 | open | /login | 
    await driver.get("https://borrower.klikcair.com/login")
    // 2 | setWindowSize | 1366x712 | 
    await driver.manage().window().setRect({ width: 1366, height: 712 })
    // 3 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 4 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 5 | click | css=.mt-sm-0 | 
    await driver.findElement(By.css(".mt-sm-0")).click()
    // 6 | click | css=.iconViewPass | 
    await driver.findElement(By.css(".iconViewPass")).click()
    // 7 | click | css=.box-login | 
    await driver.findElement(By.css(".box-login")).click()
    // 8 | type | name=password | halo123
    await driver.findElement(By.name("password")).sendKeys("halo123")
    // 9 | click | css=.block | 
    await driver.findElement(By.css(".block")).click()
    // 10 | mouseOver | css=.block | 
    {
      const element = await driver.findElement(By.css(".block"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 11 | mouseOut | css=.block | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
  })
})