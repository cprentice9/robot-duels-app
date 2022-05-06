import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Clicking the draw button displays the div with id = choices", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  drawButton.click();
  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test("Clicking the add to duo button displays the div with id = player-duo", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  drawButton.click();
  const choices = await driver.findElement(By.id("choices"));
  const bot = await choices.findElement(By.xpath("./child::*"));
  const addButton = await bot.findElement(By.xpath("button[@class='bot-btn']"));
  addButton.click();
  const duoTeam = await driver.findElement(By.id("player-duo"));
  const teamBot = await duoTeam.findElement(By.xpath("./child::*"));
  const botDisplayed = await teamBot.isDisplayed();
  expect(botDisplayed).toBe(true);
});
