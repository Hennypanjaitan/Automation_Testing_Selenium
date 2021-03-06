// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login_positif Klik cair', function() {
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
  it('Login_positif Klik cair', async function() {
    // Test name: Login_positif Klik cair
    // Step # | name | target | value
    // 1 | open | /login | 
    await driver.get("https://borrower.klikcair.com/login")
    // 2 | setWindowSize | 1366x712 | 
    await driver.manage().window().setRect({ width: 1366, height: 712 })
    // 3 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 4 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 5 | click | css=.iconViewPass | 
    await driver.findElement(By.css(".iconViewPass")).click()
    // 6 | click | css=.mt-sm-0 | 
    await driver.findElement(By.css(".mt-sm-0")).click()
    // 7 | click | css=.block | 
    await driver.findElement(By.css(".block")).click()
    // 8 | mouseOver | css=.block | 
    {
      const element = await driver.findElement(By.css(".block"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 9 | click | css=.container | 
    await driver.findElement(By.css(".container")).click()
    // 10 | click | css=.kc-modal-dialog | 
    await driver.findElement(By.css(".kc-modal-dialog")).click()
    // 11 | click | name=1 | 
    await driver.findElement(By.name("1")).click()
    // 12 | click | css=.mt-5 | 
    await driver.findElement(By.css(".mt-5")).click()
    // 13 | mouseOver | css=.mt-5 | 
    {
      const element = await driver.findElement(By.css(".mt-5"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 14 | mouseOut | css=.mt-5 | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
  })
})
